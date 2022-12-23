import React from "react";
import Form from "../../components/form/Form";
import TableBalance from "../../components/Table/Table";
import { Box, SummaryIn, SummaryOut } from "./Expenses.styled";
import { Summary } from "../../components/Summary/Summary";

const Expenses = () => {
  return (
    <div>
      <Box page="home">
        <Form />
        <TableBalance />
        <SummaryIn>
          <Summary />
        </SummaryIn>
      </Box>
      <SummaryOut>
        <Summary />
      </SummaryOut>
    </div>
  );
};

export default Expenses;
