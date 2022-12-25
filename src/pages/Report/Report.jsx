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

const Report = () => {
  const categories = getReportsByPeriod();
  const [isLoading, setIsLoading] = useState(false);
  const [arr, setArr] = useState([]);
  const [categoriesExpenses, setCategoriesExpenses] = useState({});
  const [categoriesIncomes, setCategoriesIncomes] = useState({});

    const obj = {}

  const getData = useCallback((params) => {
    getReportsByPeriod(params).then((data) => {
      // console.log(data, "data");
      setCategoriesIncomes(data.incomes);
      setCategoriesExpenses(data.expenses);
      for (const dataKey in data.expenses) {
        if(typeof data.expenses[dataKey] === 'object'){
          for (const key in data.expenses[dataKey]) {
            console.log('data.expenses[dataKey]', data.expenses[dataKey]);
            console.log('[Key]', data.expenses[dataKey][key]);

          }

        }
        // console.log('123456789:', data.expenses[dataKey]);
        // console.log('123456789:', typeof data.expenses[dataKey]);
        // console.log('dataKey', dataKey);
      }
      setIsLoading(false);
    });
  }, []);

  console.log('arr', arr);

  const [fetchData, isError] = useFetch(getData);

  useEffect(() => {
    setIsLoading(true);
    const date = "2022-12";
    fetchData(date);
  }, [fetchData]);

  if (isLoading) {
    return <Loader isLoading={isLoading}/>;
  }

  return (
    <BackgroundMain>
      <Container>
        <Balance />
        <SelDataPicker />
        <Box page="report">
          <CategoriesList categories={categoriesExpenses} />
          {/* <ExpensesTypes /> */}
          <MainChart />
        </Box>
      </Container>
    </BackgroundMain>
  );
};

export default Report;
