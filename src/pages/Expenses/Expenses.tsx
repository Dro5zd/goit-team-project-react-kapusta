import React, {useEffect} from 'react';
import Form from '../../components/MainForm/Form';
import TableBalance from '../../components/Table/Table';
import {Box, SummaryIn, SummaryOut} from './Expenses.styled';
import {Summary} from '../../components/Summary/Summary';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {addExpense, getExpense} from '../../redux/transaction/transactions-operations';
import {selectMonthExpensesStats, selectTransactionsExpenses} from '../../redux/transaction/transactions-selectors';
import {ITransaction} from '../../redux/transaction/transactionsSlice';
import { useLocation } from 'react-router';

const Expenses = () => {
  const location = useLocation();
    const dispatch = useAppDispatch();
    const expensesList = useAppSelector(selectTransactionsExpenses);
    const summaryExpense = useAppSelector(selectMonthExpensesStats);

  useEffect(() => {
    dispatch(getExpense());
  }, [dispatch]);

  const onHandleSubmit = (data: ITransaction) => {
    dispatch(addExpense(data));
  };

    return (
        <div>
            <Box page="home">
                <Form type="expense" onHandleSubmit={onHandleSubmit}/>
          <TableBalance expensesList={expensesList} expensesForm={location.pathname } />
                <SummaryIn>
                    <Summary summaryExpense={summaryExpense}/>
                </SummaryIn>
            </Box>
            <SummaryOut>
                <Summary summaryExpense={summaryExpense}/>
            </SummaryOut>
        </div>
    );
};

export default Expenses;
