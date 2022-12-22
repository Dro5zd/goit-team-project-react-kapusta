import React from "react";
import { Container } from "../../globalStyles";
import Form from "../../components/form/Form";
import { Box } from "../Expenses/ExpensesStyled";
import TableBalance from "../../components/Table/Table";


const Income = () => {
  return (
    <div>
      <Box>
        <Form />
        <TableBalance/>
      </Box>
    </div>
  );
};

export default Income;
