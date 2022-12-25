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
  const [categoriesExpenses, setCategoriesExpenses] = useState({});
  const [categoriesIncomes, setCategoriesIncomes] = useState({});

  const getData = useCallback((params) => {
    getReportsByPeriod(params).then((data) => {
      console.log(data, "data");
      setCategoriesIncomes(data?.incomes);
      setCategoriesExpenses(data?.expenses);
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
    return <Loader />;
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
