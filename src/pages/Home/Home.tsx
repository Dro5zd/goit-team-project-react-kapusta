import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";

import { Container } from "../../globalStyles";
import {
  BlockLink,
  BlockLinkMobil,
  ButtonLink,
  ButtonLinkMobil,
  ContainerMobilHome,
} from "./Home.styled";
import { Balance } from "../../components/Balance/Balance";
import { BackgroundMobil } from "../../components/BackgroundMobil/BackgroundMobil";
import ExpensesModal from "../../components/ModalsMobilHome/ExpensesModal/ExpensesModal";
import IncomeModal from "../../components/ModalsMobilHome/IncomeModal/IncomeModal";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectIsLoadingTransaction } from "../../redux/transaction/transactions-selectors";
import {
  getExpense,
  getExpenseCategories,
} from "../../redux/transaction/transactions-operations";

const Home = () => {
  const dispatch = useAppDispatch();
  const [isModalExp, setIsModalExp] = useState(false);
  const [isModalInc, setIsModalInc] = useState(false);

  useEffect(() => {
    dispatch(getExpenseCategories());
    dispatch(getExpense());
  }, [dispatch]);

  const onButtonExpense = () => {
    setIsModalExp(true);
  };
  const onButtonIncome = () => {
    setIsModalInc(true);
  };

  return (
    <>
      <BackgroundMain>
        <Container>
          <Balance />
          <BlockLink>
            <ButtonLink to="/home/expenses">EXPENSES </ButtonLink>
            <ButtonLink to="/home/income">INCOME</ButtonLink>
          </BlockLink>
          <Outlet />
        </Container>
      </BackgroundMain>

      <BackgroundMobil>
        <ContainerMobilHome>
          <Balance />
          <BlockLinkMobil>
            <ButtonLinkMobil onClick={onButtonExpense}>
              EXPENSES
            </ButtonLinkMobil>
            <ButtonLinkMobil onClick={onButtonIncome}>INCOME</ButtonLinkMobil>
          </BlockLinkMobil>
        </ContainerMobilHome>
        {isModalExp && <ExpensesModal setExpBool={setIsModalExp} />}
        {isModalInc && <IncomeModal setIncBool={setIsModalInc} />}
      </BackgroundMobil>
    </>
  );
};
export default Home;
