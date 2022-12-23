import styled from "styled-components";
import { device } from "../../utils/mixins";
import { colors } from "../../utils/colors";

export const StyledDiv = styled.div`
  .buttons-wrapper {
    display: flex;
    justify-content: center;
    gap: 15px;

    ${device.tablet} {
      margin-bottom: 20px;
      gap: 16px;
    }
  }

  .arrow-btn {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  .expenses-title {
    width: 96px;
    text-align: center;
    font-size: 14px;
    line-height: 16/14;
    letter-spacing: 0.02em;
    color: ${colors.black};
  }

  .expenses-list {
    width: 280px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ${device.tablet} {
      width: 623px;
    }

    li {
      padding-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid grey;
      flex-grow: 1;

      width: 93px;
      height: auto;

      &:hover svg,
      &:focus svg {
        fill: ${colors.orange};
      }

      ${device.tablet} {
        flex-grow: 0;
        border-bottom: none;
      }
    }

    a {
      text-decoration: none;
      color: ${colors.grayTitle};

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }

    img {
      margin: 0 auto;
      color: red;
      background: grey;
    }

    svg {
      fill: #071f41;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 12/14;
      text-align: center;
      letter-spacing: 0.02em;
    }

    h3 {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 12px;
      line-height: 12/14;
      text-align: center;
      letter-spacing: 0.02em;
    }
  }
`;
