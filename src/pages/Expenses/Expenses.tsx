import React from 'react';
import Form from '../../components/form/Form';
import { Summary } from '../../components/Summary/Summary';
import { Box } from './ExpensesStyled';


const Expenses = () => {
    return (
        <div>
            <Box>
                <Form />
            </Box>
            <Summary></Summary>
        </div>
    );

};

export default Expenses
