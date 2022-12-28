import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

interface IBox {
  page: string;
}
export const Box = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${device.tablet} {
    padding: ${(p: IBox) =>
        p.page === "report" ? "20px 40px" : "24px 40px 42px 40px"};
    width: 704px;
    margin: 0 auto 32px auto;
    background-color: ${colors.white};
    box-shadow: 0 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: ${(p: IBox) =>
        p.page === "report" ? "30px" : "0 30px 30px 30px"};
  }

  ${device.desktop} {
    width: 1098px;
    padding: ${(p: IBox) =>
        p.page === "report" ? "20px 220px" : "32px 32px 60px 32px"};
    //height: 579px;
    margin: 0 auto 40px auto;
  }
`;

export const DataBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SummaryIn = styled.div`
  display: none;
  ${device.desktop} {
    display: block;
  }
`;
export const SummaryOut = styled.div`
  display: none;
  ${device.tablet} {
    display: block;
  }
  ${device.desktop} {
    display: none;
  }
`;
