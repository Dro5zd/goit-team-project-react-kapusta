import React from 'react';
import {Container} from '../../globalStyles';
import {Balance} from '../../components/Balance/Balance';
import {BackgroundMain} from '../../components/BackgroundMain/BackgroundMain';
import {Box} from '../Expenses/Expenses.styled';
import CategoriesList from '../../components/Categories/CategoriesList/CategoriesList';

const Report = () => {
    return (
        <BackgroundMain >
            <Container >
                <Balance />
                <Box page='report'>
                    <CategoriesList/>
                </Box>
            </Container>
        </BackgroundMain>
    );

};

export default Report
