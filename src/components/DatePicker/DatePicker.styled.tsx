import styled from "styled-components";
import { colors } from "../../utils/colors";

export const MonthPicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;

  p {
    font-size: 12px;
    line-height: 1.1;
    letter-spacing: 0.04em;
    color: rgba(82, 85, 95, 0.7);
  }
  div {
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 6px;

    b {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.02em;
      color: ${colors.black};
    }
  }
`;
