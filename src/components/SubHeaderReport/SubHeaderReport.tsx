import { useLocation } from "react-router-dom";
import { BackIcon } from "../Balance/Balance.styled"
import { ReactComponent as ArrowBack } from "../../assets/images/svg/balance/arrow-back.svg";
import SelDataPicker from "../DatePicker/DatePicker";
import { BalanceSpan, MobileSummary, ReportBalance, SubBox, SummarySpan, Title } from "./SubHeadReport.styled";

export const SubHeaderReport = () => {
    const location = useLocation();
    return <SubBox>
        <BackIcon to="/" hidden={location.pathname !== "/report"} style={ {alignSelf: 'flex-start', marginBottom: '16px'}}>
            <ArrowBack  />
          {/* Main page */}
        </BackIcon>
        <SelDataPicker />
        <ReportBalance>Balance: 
            <BalanceSpan>55555.00 UAH</BalanceSpan>
        </ReportBalance>
        <MobileSummary>
            <Title >Expences: <SummarySpan color="red">- 5555 UAH.</SummarySpan> </Title>
            <Title>Income: <SummarySpan>+ 5555 UAH.</SummarySpan></Title>
        </MobileSummary>
    </SubBox>
}