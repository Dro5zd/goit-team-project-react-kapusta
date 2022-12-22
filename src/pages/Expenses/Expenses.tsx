import React from "react";
import Form from "../../components/form/Form";
import TableBalance from "../../components/Table/Table";
import { Box } from "./Expenses.styled";

const Expenses = () => {
  return (
    <div>
      <Box>
        <Form />
        <TableBalance />
      </Box>
      {/* <ry></Summary> */}
    </div>
  );
};

export default Expenses;
