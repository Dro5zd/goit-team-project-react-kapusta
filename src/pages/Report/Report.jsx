import React, { useCallback, useEffect, useState } from "react";
import { Container } from "../../globalStyles";
import { Balance } from "../../components/Balance/Balance";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";
import { Box } from "../Expenses/Expenses.styled";
import CategoriesList from "../../components/Categories/CategoriesList/CategoriesList";
import SelDataPicker from "../../components/DatePicker/DatePicker";
import { MainChart } from "../../components/Chart/MainChart";
import { getReportsByPeriod } from "../../http/services.user";
import { ExpensesTypes } from "../../components/ExpensesTypes/ExpensesTypes";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader/Loader";
import { BackgroundMobil } from "../../components/BackgroundMobil/BackgroundMobil";
import { SubHeaderReport } from "../../components/SubHeaderReport/SubHeaderReport";

const Report = () => {
  const categories = getReportsByPeriod();
  const [isLoading, setIsLoading] = useState(false);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const [chartData, setChartData] = useState({});
  const [categoriesIncomes, setCategoriesIncomes] = useState({});

  useEffect(() => {
    if (categoriesArr[0]) {
      const data = categoriesArr[0];
      delete data.data.total;
      setChartData(data);
    }
  }, [categoriesArr]);

  const getData = useCallback((params) => {
    getReportsByPeriod(params).then((data) => {
      for (const dataKey in data.expenses) {
        if (typeof data.expenses[dataKey] === "object") {
          for (const key in data.expenses[dataKey]) {
            setCategoriesArr((prevState) => [
              ...prevState,
              {
                category: key,
                total: data.expenses[dataKey][key].total,
                data: data.expenses[dataKey][key],
              },
            ]);
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
    const data = categoriesArr.find((el) => el.category === title);
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
          {chartData?.data && <MainChart chartData={chartData?.data} />}
        </Container>
      </BackgroundMobil>

      <BackgroundMain>
        <SubHeaderReport />
        <Container>
          <Box page="report">
            <CategoriesList
              categories={categoriesArr}
              onclickHandle={onclickHandle}
            />
            {/* <ExpensesTypes /> */}
          </Box>
          {chartData?.data && <MainChart chartData={chartData?.data} />}
        </Container>
      </BackgroundMain>
    </>
  );
};

export default Report;
