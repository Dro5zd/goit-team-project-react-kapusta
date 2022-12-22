import React from 'react';
import { Outlet } from 'react-router-dom';
import { Balance } from "../../components/Balance/Balance";

import { Container } from '../../globalStyles';
import { BlockLink, ButtonLink} from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Balance />

      <BlockLink>
        <ButtonLink to="/home/expenses">EXPENSES </ButtonLink>
        <ButtonLink to="/home/income">INCOME</ButtonLink>
      </BlockLink>
      <Outlet />
    </Container>
  );
};
export default Home;
