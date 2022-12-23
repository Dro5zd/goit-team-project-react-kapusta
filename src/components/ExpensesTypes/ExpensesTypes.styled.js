import styled from "styled-components";
import { device } from "../../utils/mixins";
import { colors } from "../../utils/colors";

export const StyledDiv = styled.div`
  padding: 0 0 20px;
  max-width: 100vw;

  ${device.tablet} {
    width: 704px;
    margin: 0 auto;
  }

  ${device.tablet} {
    padding: 20px 40px;
  }

  .buttons-wrapper {
    display: flex;
    justify-content: center;
    gap: 15px;

    /* margin-bottom: 20px; */
  }

  .arrow-btn {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    cursor: pointer;

    /* img {
      width: 4px;
      height: 10px;
    } */
  }

  .expenses-title {
    width: 96px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: ${colors.black};
  }

  .expenses-list {
    width: 280px;
    margin: 0 auto;
    /* display: flex; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;

    li {
      /* max-width: 93px; */
      margin-top: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid grey;
    }

    a {
      text-decoration: none;
      color: ${colors.grayTitle};

      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    img {
      margin: 0 auto;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 12/14;
      text-align: center;
      letter-spacing: 0.02em;
    }

    h3 {
      font-weight: 400;
      font-size: 12px;
      line-height: 12/14;
      text-align: center;
      letter-spacing: 0.02em;
    }
  }
`;
