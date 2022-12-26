import { useLocation } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../../assets/images/svg/balance/arrow-back.svg";
import SelDataPicker from "../DatePicker/DatePicker";
import { useAppSelector } from "../../redux/store";
import { selectBalance } from "../../redux/auth/auth-selectors";
import { selectTransactions, selectTransactionsExpenses } from "../../redux/transaction/transactions-selectors";
import { BalanceSpan, MobileSummary, ReportBalance, SubBox, SummarySpan, TabBox, Title, Icon } from "./SubHeadReport.styled";

export const SubHeaderReport = () => {
    const balance = useAppSelector(selectBalance)
    const incomes = useAppSelector(selectTransactions)
    const expenses = useAppSelector(selectTransactionsExpenses)
    // console.log(expenses);
    
    const location = useLocation();
    return <SubBox>
        <Icon to="/" hidden={location.pathname !== "/report"}>
            <ArrowBack />
            Main page
        </Icon>
        <TabBox>
            <SelDataPicker />
        <ReportBalance>Balance: 
            <BalanceSpan>{balance}.00 UAH</BalanceSpan>
            </ReportBalance>
        </TabBox>
        <MobileSummary>
            <Title>Expenses: <SummarySpan color="red">- {expenses[0].amount}.00 UAH.</SummarySpan> </Title>
            <Title>Income: <SummarySpan>+ {incomes[0].amount}.00 UAH.</SummarySpan></Title>
        </MobileSummary>
    </SubBox>
}