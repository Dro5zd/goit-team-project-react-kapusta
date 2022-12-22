import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

import { Container } from '../globalStyles';
import { BlockLink, ButtonLink} from './HomeStyled';

const Home = () => {

    return (
        <Container>
            <BlockLink>
                <ButtonLink to="/home/expenses">EXPENSES </ButtonLink>
                <ButtonLink to="/home/income">INCOME</ButtonLink>  
            </BlockLink>
            <Outlet/>
        </Container>

    );
};
export default Home