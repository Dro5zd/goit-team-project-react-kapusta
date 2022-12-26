import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";
import { BackIcon } from "../Balance/Balance.styled";

export const SubBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 87px 0;
  height: 342px;

  ${device.tablet} {
    flex-direction: row;
    align-items: center;
    height: 44px;
    padding: 40px 32px 114px 32px;
    width: 768px;
    margin-left: auto;
    margin-right: auto;
  }

  ${device.desktop} {
    padding: 40px 32px 114px 32px;
    width: 1160px;
  }
`;

export const Icon = styled(BackIcon)`
  align-self: flex-start;
  margin-bottom: 16px;
  color: transparent;

  ${device.tablet} {
    align-self: center;
    margin-bottom: 0;
    width: 115px;
    color: rgba(82, 85, 95, 0.7);
  }
`;

export const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    gap: 40px;
  }

  ${device.desktop} {
    gap: 240px;
  }
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

  ${device.tablet} {
    flex-direction: row;
    align-items: center;
    margin: 0;
    width: 228px;
    height: 44px;
  }
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

  ${device.tablet} {
    width: 125px;
    margin-top: 0;
    margin-left: 20px;
  }
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

  ${device.tablet} {
    left: 32px;
    bottom: 0;
    justify-content: center;
    gap: 20px;
    width: 704px;
    height: 50px;
    padding: 0;
  }

  ${device.desktop} {
    width: 1100px;
  }
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

  ${device.tablet} {
    padding: 0;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
    width: fit-content;
  }
`;

export const SummarySpan = styled.span`
  margin-top: 4px;
  color: ${(p) => (p.color ? "#E53935" : "#407946")};

  ${device.tablet} {
    margin-left: 15px;
    padding-bottom: 3px;
  }
`;
