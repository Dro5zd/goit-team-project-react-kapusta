import React, { useEffect, useState } from "react";
import {Outlet, useNavigate} from 'react-router-dom';
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";

import { Container } from "../../globalStyles";
import {
  BlockLink,
  BlockLinkMobil,
  ButtonLink,
  ButtonLinkMobil, ContainerMobileHome,
} from './Home.styled';
import { Balance } from "../../components/Balance/Balance";
import { BackgroundMobil } from "../../components/BackgroundMobil/BackgroundMobil";
import ExpensesModal from "../../components/ModalsMobilHome/ExpensesModal/ExpensesModal";
import IncomeModal from "../../components/ModalsMobilHome/IncomeModal/IncomeModal";
import { useAppDispatch} from "../../redux/store";
import { getExpenseCategories } from "../../redux/transaction/transactions-operations";
import HomeList from "../../components/HomeList/HomeList";

const Home = () => {
  const dispatch = useAppDispatch();
  const [isModalExp, setIsModalExp] = useState(false);
  const [isModalInc, setIsModalInc] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getExpenseCategories());
  }, [dispatch]);

  const onButtonExpense = () => {
    setIsModalExp(true);
    navigate('/home/expenses')
  };
  const onButtonIncome = () => {
    setIsModalInc(true);
    navigate('/home/income')
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
        <ContainerMobileHome>
          <Balance />
          <div>
          <HomeList/>
        </div>
          <BlockLinkMobil>
            <ButtonLinkMobil onClick={onButtonExpense}>
              EXPENSES
            </ButtonLinkMobil>
            <ButtonLinkMobil onClick={onButtonIncome} >INCOME</ButtonLinkMobil>
          </BlockLinkMobil>
        </ContainerMobileHome>
        {isModalExp && <ExpensesModal setExpBool={setIsModalExp} />}
        {isModalInc && <IncomeModal setIncBool={setIsModalInc} />}
      </BackgroundMobil>
    </>
  );
};
export default Home;
