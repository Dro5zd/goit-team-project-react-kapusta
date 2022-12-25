import React, {useEffect} from 'react';
import { Container } from "../../globalStyles";
import { Balance } from "../../components/Balance/Balance";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";
import { Box } from "../Expenses/Expenses.styled";
import CategoriesList from "../../components/Categories/CategoriesList/CategoriesList";
import SelDataPicker from "../../components/DatePicker/DatePicker";
import {getExpenseCategories} from '../../redux/transaction/transactions-operations';
import {useAppDispatch} from '../../redux/store';
import {MainChart} from '../../components/Chart/MainChart';

const Report = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getExpenseCategories());
    }, [dispatch]);
  return (
    <BackgroundMain>
      <Container>
        <Balance />
        <SelDataPicker />
        <Box page="report">
          <CategoriesList />
            <MainChart/>
        </Box>
      </Container>
    </BackgroundMain>
  );
};

export default Report;
