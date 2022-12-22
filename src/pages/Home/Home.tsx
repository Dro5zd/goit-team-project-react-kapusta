import React from "react";
import { Outlet } from "react-router-dom";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";

import { Container } from "../../globalStyles";
import { BlockLink, ButtonLink } from "./Home.styled";

const Home = () => {
  return (
    <BackgroundMain>
      <Container>
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
