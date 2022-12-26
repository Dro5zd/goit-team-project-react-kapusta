import { useSelector } from "react-redux"
import { WrapperReportSubHeader, ResultBalanceDiv, TitleExpenses, ExpensesStyle, TitleIncome, IncomeStyle } from "./ReportSubHeader.styled"
export const ReportSubHeader = () => { 
    // const transectionExpensesSelector = useSelector(state(state => state.transaction.expenses))
    // const transectionIncomeSelector = useSelector(state(state=> state.transaction.income))
    return (
        <WrapperReportSubHeader>
            <ResultBalanceDiv>
                <TitleExpenses>Expenses:</TitleExpenses>
                <ExpensesStyle>- 18 000.00 UAH.</ExpensesStyle>
            </ResultBalanceDiv>
            <ResultBalanceDiv>
                <TitleIncome>Income:</TitleIncome>
                <IncomeStyle>+ 45 000.00 UAH.</IncomeStyle>
            </ResultBalanceDiv>
        </WrapperReportSubHeader>
    )
}