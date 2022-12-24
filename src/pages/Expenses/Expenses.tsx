import React, { useEffect } from "react";
import Form from "../../components/MainForm/Form";
import TableBalance from "../../components/Table/Table";
import { Box, SummaryIn, SummaryOut } from "./Expenses.styled";
import { Summary } from "../../components/Summary/Summary";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getExpense } from "../../redux/transaction/transactions-operations";
import { selectTransactionsExpenses } from "../../redux/transaction/transactions-selectors";

const Expenses = () => {
  const dispatch = useAppDispatch();
  const expensesList = useAppSelector(selectTransactionsExpenses);

  // console.log(expensesList);

  useEffect(() => {
    dispatch(getExpense());
  }, [dispatch]);

  return (
    <div>
      <Box page="home">
        <Form />
        <TableBalance expensesList={expensesList} />
        <SummaryIn>
          <Summary />
        </SummaryIn>
      </Box>
      <SummaryOut>
        <Summary />
      </SummaryOut>
    </div>
  );
};

export default Expenses;
