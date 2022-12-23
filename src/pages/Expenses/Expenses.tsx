import React from "react";
import Form from "../../components/form/Form";
import TableBalance from "../../components/Table/Table";
import { Box, SummaryIn, SummaryOut, DataBox } from "./Expenses.styled";
import { Summary } from "../../components/Summary/Summary";

const Expenses = () => {
  return (
    <div>
      <Box page="home">
        <Form />
        <DataBox>
          <TableBalance />
          <SummaryIn>
            <Summary />
          </SummaryIn>
        </DataBox>
      </Box>
      <SummaryOut>
        <Summary />
      </SummaryOut>
    </div>
  );
};

export default Expenses;
