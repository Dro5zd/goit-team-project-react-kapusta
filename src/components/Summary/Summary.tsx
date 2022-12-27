import { Box, Item, Title } from "./Summary.styled";
import { useEffect, useState } from "react";
import { ITransaction } from "../../redux/transaction/transactionsSlice";

interface ISummaryProps {
  summaryIncome?: any;
  summaryExpense?: any;
}
export const Summary = ({ summaryIncome, summaryExpense }: ISummaryProps) => {
  const [summary, setSummary] = useState({});

  console.log("summary", summary);

  useEffect(() => {
    if (summaryIncome) {
      setSummary(summaryIncome);
    }
    if (summaryExpense) {
      setSummary(summaryExpense);
    }
  }, [summaryIncome, summaryExpense]);

  const summaryArr = Object.keys(summary)?.map((key) => {
    // @ts-ignore
    return summary[key] !== "N/A" ? { month: [key], value: summary[key] } : {};
  });

  const filteredSummaryArr = summaryArr.filter(({ value }) => value);
  return (
    <Box>
      <Title>SUMMARY</Title>
      <ul>
        {filteredSummaryArr?.map(({ value, month }, index) => (
          <Item key={index}>
            <p>{month}</p>
            <p>{value}</p>
          </Item>
        ))}
      </ul>
    </Box>
  );
};
