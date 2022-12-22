import React from "react";
import Form from "../../components/form/Form";
import TableBalance from "../../components/Table/Table";
import { Box } from "../Expenses/Expenses.styled";


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
