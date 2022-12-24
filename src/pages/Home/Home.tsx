import React, { useState } from "react";
import {  Outlet } from "react-router-dom";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";


import { Container, ContainerMobilHome } from "../../globalStyles";
import { BlockLink, BlockLinkMobil, ButtonLink, ButtonLinkMobil } from "./Home.styled";
import { Balance } from "../../components/Balance/Balance";
import { BackgroundMobil } from "../../components/BackgroundMobil/BackgroundMobil";
import ExpensesModal from "../../components/ModalsMobilHome/ExpensesModal/ExpensesModal";
import IncomeModal from "../../components/ModalsMobilHome/IncomeModal/IncomeModal";

const Home = () => {
const [isModalExp, setIsModalExp] = useState(false)
const [isModalInc, setIsModalInc] = useState(false)

  const onButtonExpense = () => {
    setIsModalExp(true)
  }
  const onButtonIncome = () => {
    setIsModalInc(true)
  }

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
            <ButtonLinkMobil onClick={onButtonExpense}>EXPENSES</ButtonLinkMobil>
            <ButtonLinkMobil onClick={ onButtonIncome}>INCOME</ButtonLinkMobil>
          </BlockLinkMobil>
        </ContainerMobilHome>
        {isModalExp && <ExpensesModal setExpBool={setIsModalExp} />}
        {isModalInc && <IncomeModal setIncBool={setIsModalInc}/> }
        
      </BackgroundMobil>
      </>
  );
};
export default Home;
