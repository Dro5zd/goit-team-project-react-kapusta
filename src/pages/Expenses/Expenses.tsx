import React from 'react';
import Form from '../../components/form/Form';
import TableBalance from '../../components/Table/Table';
import { Box } from './ExpensesStyled';


const Expenses = () => {
    return (
        <div>
            <Box>
                <Form />
                <TableBalance/>
            </Box>
        </div>
    );

};

export default Expenses
