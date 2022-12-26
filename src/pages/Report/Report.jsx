import React, { useCallback, useEffect, useState } from "react";
import { Container } from "../../globalStyles";
import { Balance } from "../../components/Balance/Balance";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";
import { Box } from "../Expenses/Expenses.styled";
import CategoriesList from "../../components/Categories/CategoriesList/CategoriesList";
import SelDataPicker from "../../components/DatePicker/DatePicker";
import { MainChart } from "../../components/Chart/MainChart";
import { getReportsByPeriod } from "../../http/services.user";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader/Loader";

const Report = () => {
  const categories = getReportsByPeriod();
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [uniqueArr, setUniqueArr] = useState([]);
  const [chartData, setChartData] = useState({});
  const [categoriesIncomes, setCategoriesIncomes] = useState({});

  useEffect(() => {
    if (categoriesArr[0]) {
      const data = categoriesArr[0];
      delete data.data.total;
      setChartData(data);
    }
    const arr = new Set(categoriesArr);
    setUniqueArr(arr);
  }, [categoriesArr]);

  console.log("UniqueA", categoriesArr);

  // const getData = useCallback((params) => {
  //   getReportsByPeriod(params).then((data) => {
  //     for (const dataKey in data.expenses) {
  //       if (typeof data.expenses[dataKey] === "object") {
  //         for (const key in data.expenses[dataKey]) {
  //           setCategoriesArr((prevState) => [
  //             ...prevState,
  //             {
  //               category: key,
  //               total: data.expenses[dataKey][key].total,
  //               data: data.expenses[dataKey][key],
  //             },
  //           ]);
  //         }
  //       }
  //     }
  //     setIsLoading(false);
  //   });
  // }, []);

  const getData = useCallback((params) => {
    getReportsByPeriod(params).then((data) => {
      console.log("data.expenses", data.expenses.expensesData, data.expenses);
      if (data?.expenses?.expensesData) {
        const arr = [];
        for (const key in data?.expenses?.expensesData) {
          const isContainCategory = categoriesArr.some((el) => {
            return el.category === key;
          });
          if (!isContainCategory) {
            arr.push({
              category: key,
              total: data?.expenses?.expensesData[key].total,
              data: data?.expenses?.expensesData[key],
            });
            setCategoriesArr(arr);
          }
        }
      }
      setIsLoading(false);
    });
  }, []);

  const [fetchData, isError] = useFetch(getData);

  useEffect(() => {
    setIsLoading(true);
    const date = "2022-12";
    fetchData(date);
  }, [fetchData]);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  const onclickHandle = (e, title) => {
    const data = categoriesArr?.find((el) => el.category === title);
    delete data.data.total;
    setChartData(data);
  };

  return (
    <BackgroundMain>
      <Container>
        <Balance />
        <SelDataPicker />
        <Box page="report">
          <CategoriesList
            categories={categoriesArr}
            onclickHandle={onclickHandle}
          />
        </Box>
        {chartData?.data && <MainChart chartData={chartData?.data} />}
      </Container>
    </BackgroundMain>
  );
};

export default Report;
