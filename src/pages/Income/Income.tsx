import React, { useEffect } from "react";
import Form from "../../components/MainForm/Form";
import TableBalance from "../../components/Table/Table";
import { Box, SummaryIn, SummaryOut } from "../Expenses/Expenses.styled";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  selectMonthIncomeStats,
  selectTransactionsIncomes,
} from "../../redux/transaction/transactions-selectors";
import {
  addIncome,
  getIncome,
} from "../../redux/transaction/transactions-operations";
import { ITransaction } from "../../redux/transaction/transactionsSlice";
import { Summary } from "../../components/Summary/Summary";

const Income = () => {
  const dispatch = useAppDispatch();
  const incomeList = useAppSelector(selectTransactionsIncomes);
  const summaryIncome = useAppSelector(selectMonthIncomeStats);

  useEffect(() => {
    dispatch(getIncome());
  }, [dispatch]);

  const onHandleSubmit = (data: ITransaction) => {
    dispatch(addIncome(data));
  };

  return (
    <div>
      <Box page={"home"}>
        <Form type="income" onHandleSubmit={onHandleSubmit} />
        <TableBalance incomeList={incomeList} />
        <SummaryIn>
          <Summary summaryIncome={summaryIncome} />
        </SummaryIn>
      </Box>
      <SummaryOut>
        <Summary summaryIncome={summaryIncome} />
      </SummaryOut>
    </div>
  );
};

export default Income;
