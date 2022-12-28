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
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [chartData, setChartData] = useState({});
  const [categoriesType, setCategoriesType] = useState("EXPENSES");

  useEffect(() => {
    let data = [];
    if (categoriesType === "EXPENSES") {
      if (categoriesArr[0]) {
        data = categoriesArr[0];
        // @ts-ignore
        delete data.data.total;
        setChartData(data);
      }
    } else {
      if (categoriesIncome[0]) {
        data = categoriesIncome[0];
        // @ts-ignore
        delete data.data.total;
        setChartData(data);
      }
    }
  }, [categoriesType, categoriesArr, categoriesIncome]);

  const getData = useCallback((params: any) => {
    getReportsByPeriod(params).then((data) => {
      if (data?.expenses?.expensesData) {
        setExpenseTotal(data?.expenses?.expenseTotal);
        const arr = [];
        for (const key in data?.expenses?.expensesData) {
          const isContainCategory = categoriesArr.some((el) => {
            // @ts-ignore
            return el.category === key;
          });
          if (!isContainCategory) {
            arr.push({
              category: key,
              total: data?.expenses?.expensesData[key].total,
              data: data?.expenses?.expensesData[key],
            });
            // @ts-ignore
            setCategoriesArr(arr);
          }
        }
      }

      if (data?.incomes?.incomesData) {
        setIncomeTotal(data?.incomes?.incomeTotal);
        const arr = [];
        for (const key in data?.incomes?.incomesData) {
          const isContainCategory = categoriesArr.some((el) => {
            // @ts-ignore
            return el.category === key;
          });
          if (!isContainCategory) {
            arr.push({
              category: key,
              total: data?.incomes?.incomesData[key].total,
              data: data?.incomes?.incomesData[key],
            });
            // @ts-ignore
            setCategoriesIncome(arr);
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
    // @ts-ignore
    fetchData(date);
  }, [fetchData]);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  const onChangeType = (type: any) => {
    setCategoriesType(type);
  };

  const onclickHandle = (e: number, title: string, categoryTitle: string) => {
    setCategoriesType(categoryTitle);
    let data = [];
    if (categoryTitle === "EXPENSES") {
      // @ts-ignore
      data = categoriesArr?.find((el) => el.category === title);
    } else {
      // @ts-ignore
      data = categoriesIncome?.find((el) => el.category === title);
    }
    // @ts-ignore
    delete data.data.total;
    setChartData(data);
  };

  return (
    <>
      <BackgroundMobil>
        <Container>
          <SubHeaderReport
            expenseTotal={expenseTotal}
            incomeTotal={incomeTotal}
          />

          <Box page="report">
            {/*// @ts-ignore*/}
            <CategoriesList
              categories={categoriesArr}
              onclickHandle={onclickHandle}
            />
            {/* <ExpensesTypes /> */}
          </Box>
          <Box page="report">
            {/*// @ts-ignore*/}
            {chartData?.data && <MainChart chartData={chartData?.data} />}
          </Box>
        </Container>
      </BackgroundMobil>

  {/*// @ts-ignore*/}
      <BackgroundMain>
        <SubHeaderReport
          expenseTotal={expenseTotal}
          incomeTotal={incomeTotal}
        />
        <Container>
          <Box page="report">
            <CategoriesList
              categoriesIncome={categoriesIncome}
              categories={categoriesArr}
              onclickHandle={onclickHandle}
              onChangeType={onChangeType}
            />
          </Box>
          <Box page="report">
            {/*// @ts-ignore*/}
            {chartData?.data && <MainChart chartData={chartData?.data} />}
          </Box>
        </Container>
      </BackgroundMain>
    </>
  );
};

export default Report;
