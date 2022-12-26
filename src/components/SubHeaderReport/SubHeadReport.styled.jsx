import styled from "styled-components";
import { colors } from "../../utils/colors";

export const SubBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 87px 0;
`;

export const ReportBalance = styled.div`
  width: 183px;
  height: 72px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-align: center;
  color: rgba(82, 85, 95, 0.7);
`;

export const BalanceSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  margin-top: 8px;

  font-weight: 700;
  color: ${colors.black};
  border: 2px solid #ffffff;
  border-radius: 22px;
`;

export const MobileSummary = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;

  width: 280px;
  padding: 8px 0;

  background-color: ${colors.white};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
`;

export const Title = styled.p`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 25px 10px;
  width: 140px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  text-align: center;
  color: ${colors.grayTitle};

  :not(:last-child) {
    border-right: 1px solid #e0e5eb;
  }
`;

export const SummarySpan = styled.span`
  margin-top: 4px;
  color: ${(p) => (p.color ? "#E53935" : "#407946")};
`;
