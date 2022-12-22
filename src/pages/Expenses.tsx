import React from 'react';
import { Container } from '../globalStyles';
import Form from '../components/form/Form';
import { Box } from './ExpensesStyled';

const keyboard: string = require('../images/svg/keyboard.svg').default;

const Expenses = () => {
    return (
        <div>
            <Box>
                <Form />
            </Box>
        </div>
    );

};

export default Expenses
