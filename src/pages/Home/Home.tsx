import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";

import { Container } from "../../globalStyles";
import { BlockLink, ButtonLink } from "./Home.styled";
import { Balance } from "../../components/Balance/Balance";
import SelDataPicker from "../../components/DatePicker/DatePicker";

const Home = () => {
  return (
    <BackgroundMain>
      <Container>
        <SelDataPicker/>
        <Balance />
      
        <BlockLink>
          <ButtonLink to="/home/expenses">EXPENSES </ButtonLink>
          <ButtonLink to="/home/income">INCOME</ButtonLink>
        </BlockLink>
        <Outlet />
      </Container>
    </BackgroundMain>
  );
};
export default Home;
