import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

export const Box = styled.div`
  ${device.tablet} {
    padding: 24px 40px 0 40px;
    width: 704px;
    height: 616px;
    background-color: ${colors.white};
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
  }
  ${device.desktop} {
    width: 1098px;
    height: 579px;
    margin: 0 auto;
  }
`;
