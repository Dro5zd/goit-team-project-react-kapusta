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
import { BackgroundMobil } from "../../components/BackgroundMobil/BackgroundMobil";
import { SubHeaderReport } from "../../components/SubHeaderReport/SubHeaderReport";

const Report = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [categoriesIncome, setCategoriesIncome] = useState([]);
  const [chartData, setChartData] = useState({});
  const [categoriesType, setCategoriesType] = useState("EXPENSES");

  useEffect(() => {
    let data = [];
    if (categoriesType === "EXPENSES") {
      if (categoriesArr[0]) {
        data = categoriesArr[0];
        delete data.data.total;
        setChartData(data);
      }
    } else {
      if (categoriesIncome[0]) {
        data = categoriesIncome[0];
        delete data.data.total;
        setChartData(data);
      }
    }
    console.log("chartData", chartData, categoriesType);
  }, [categoriesType, categoriesArr, categoriesIncome]);

  const getData = useCallback((params) => {
    getReportsByPeriod(params).then((data) => {
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

      console.log("data?.incomes?.expensesD", data);
      if (data?.incomes?.incomesData) {
        const arr = [];
        for (const key in data?.incomes?.incomesData) {
          const isContainCategory = categoriesArr.some((el) => {
            return el.category === key;
          });
          if (!isContainCategory) {
            arr.push({
              category: key,
              total: data?.incomes?.incomesData[key].total,
              data: data?.incomes?.incomesData[key],
            });
            setCategoriesIncome(arr);
          }
        }
      }

      setIsLoading(false);
    });
  }, []);

  console.log("categoriesIncome", categoriesIncome);

  const [fetchData, isError] = useFetch(getData);

  useEffect(() => {
    setIsLoading(true);
    const date = "2022-12";
    fetchData(date);
  }, [fetchData]);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  const onChangeType = (type) => {
    setCategoriesType(type);
  };

  const onclickHandle = (e, title, categoryTitle) => {
    console.log(" categoryTitle", categoryTitle, title);
    setCategoriesType(categoryTitle);
    let data = [];
    if (categoryTitle === "EXPENSES") {
      data = categoriesArr?.find((el) => el.category === title);
    } else {
      data = categoriesIncome?.find((el) => el.category === title);
    }
    delete data.data.total;
    setChartData(data);
  };

  return (
    <>
      <BackgroundMobil>
        <Container>
          <SubHeaderReport />
          <Box page="report">
            <CategoriesList
              categories={categoriesArr}
              onclickHandle={onclickHandle}
            />
            {/* <ExpensesTypes /> */}
          </Box>
          <Box page="report">
            {chartData?.data && <MainChart chartData={chartData?.data} />}
          </Box>
        </Container>
      </BackgroundMobil>

      <BackgroundMain>
        <SubHeaderReport />
        <Container>
          <Box page="report">
            <CategoriesList
              categoriesIncome={categoriesIncome}
              categories={categoriesArr}
              onclickHandle={onclickHandle}
              onChangeType={onChangeType}
            />
            {/* <ExpensesTypes /> */}
          </Box>
          <Box page="report">
            {chartData?.data && <MainChart chartData={chartData?.data} />}
          </Box>
        </Container>
      </BackgroundMain>
    </>
  );
};

export default Report;
