import React from 'react';
import {Container} from '../../globalStyles';
import {Balance} from '../../components/Balance/Balance';
import {BackgroundMain} from '../../components/BackgroundMain/BackgroundMain';
import {Box} from '../Expenses/Expenses.styled';
import  CategoriesList  from '../../components/Categories/CategoriesList/CategoriesList';
import SelDataPicker from '../../components/DatePicker/DatePicker';
import { ReportSubHeader } from '../../components/ReportSubHeader/ReportSubHeader';

const Report = () => {
    return (
        <BackgroundMain >
            <Container >
                <Balance />
                <SelDataPicker />
                <ReportSubHeader/>
                <Box page='report'>
                    <CategoriesList/>
                </Box>
            </Container>
        </BackgroundMain>
    );

};

export default Report
