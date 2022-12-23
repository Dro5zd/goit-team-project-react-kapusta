import React from 'react';
import Form from '../../components/form/Form';
import TableBalance from '../../components/Table/Table';
import { Box } from './Expenses.styled';
import {Summary} from '../../components/Summary/Summary';

const Expenses = () => {
    return (
        <div>
            <Box page='home'>
                <Form />
                <TableBalance/>
                <Summary/>
            </Box>
        </div>
    );
};

export default Expenses
