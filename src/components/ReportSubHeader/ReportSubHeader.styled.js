import { device } from "../../utils/mixins";
import styled from "styled-components";

export const WrapperReportSubHeader = styled.div`
display: flex;
width: 280px;
height: 85px;
justify-content: center;
align-items: center;
margin:  32px auto ;
padding: 20px 10px 25px 10px;
background: #FFFFFF;
box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
border-radius: 20px;
${device.tablet}{
width: 704px;
border-radius: 30px;
height:50px;
padding: 15px 139px 15px 134px;
}

${device.desktop}{
   width: 1034px;
   padding: 15px 299px 15px 304px;

}


`
export const ResultBalanceDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
${device.tablet} {
    display: flex;
flex-direction:row

}
`
export const TitleExpenses = styled.span`

font-weight: 700;
font-size: 14px;
line-height: 1.14;
color: #52555F;
`
export const TitleIncome = styled.span`

font-weight: 700;
font-size: 14px;
line-height: 1.14;
color: #52555F;
 ${device.tablet} {
    padding-left: 20px;
 }
`
export const ExpensesStyle = styled.span`

font-weight: 700;
font-size: 14px;
line-height: 1.14;
letter-spacing: 0.04em;
color: #E53935;
${device.tablet} {
    padding-right: 20px;
}
`
export const IncomeStyle = styled.span`

font-weight: 700;
font-size: 14px;
line-height: 1.14;
letter-spacing: 0.04em;
color: #407946;

`