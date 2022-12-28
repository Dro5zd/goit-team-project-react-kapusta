import { useLocation } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../assets/images/svg/balance/arrow-back.svg";
import SelDataPicker from "../DatePicker/DatePicker";
import { useAppSelector } from "../../redux/store";
import { selectBalance } from "../../redux/auth/auth-selectors";
import {
  selectTransactionsIncomes,
  selectTransactionsExpenses,
} from "../../redux/transaction/transactions-selectors";
import {
  BalanceSpan,
  MobileSummary,
  ReportBalance,
  SubBox,
  SummarySpan,
  TabBox,
  Title,
  Icon,
} from "./SubHeadReport.styled";

export const SubHeaderReport = ({ expenseTotal, incomeTotal }: any) => {
  const balance = useAppSelector(selectBalance);

  // const incomes = useAppSelector(selectTransactionsIncomes);
  // const expenses = useAppSelector(selectTransactionsExpenses);

  // console.log(expenses);
  // console.log("ExpenseTot", expenseTotal);

  const location = useLocation();
  return (
    <SubBox>
      <Icon to="/" hidden={location.pathname !== "/report"}>
        <ArrowBack />
        Main page
      </Icon>
      <TabBox>
        <SelDataPicker />
        <ReportBalance>
          Balance:
          <BalanceSpan>{balance}.00 UAH</BalanceSpan>
        </ReportBalance>
      </TabBox>
      <MobileSummary>
        <Title>
          Expenses:{" "}
          <SummarySpan color="red">- {expenseTotal}.00 UAH.</SummarySpan>{" "}
        </Title>
        <Title>
          Income: <SummarySpan>+ {incomeTotal}.00 UAH.</SummarySpan>
        </Title>
      </MobileSummary>
    </SubBox>
  );
};
