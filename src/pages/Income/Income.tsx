import React from "react";
import Form from "../../components/MainForm/Form";
import TableBalance from "../../components/Table/Table";
import { Box } from "../Expenses/Expenses.styled";


const Income = () => {
  return (
    <div>
      <Box page={'home'}>
        <Form />
        <TableBalance/>
      </Box>
    </div>
  );
};

export default Income;
