import styled from "styled-components";
import { ReactComponent as Delete } from "../../assets/images/svg/delete.svg";
import { colors } from "../../utils/colors";
import { device } from "../../utils/mixins";

export const List = styled.ul`
  margin: 0 auto;
  margin-top: 60px;
  padding: 20px 20px 12px 20px;
  height: 200px;
  overflow-y: scroll;
  ${device.mobile} {
    width: 480px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 8px 0;
  border-bottom: 1px solid #f5f6fb;
`;

export const BlockAction = styled.div`
  h3 {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    color: #52555f;
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  p {
    font-weight: 400;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.04em;
    color: #52555f;
  }
`;

export const BoxDate = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 3px;
`;

export const BoxMony = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
  }
  & .red {
    color: #e7192e;
  }
  & .green {
    color: #407946;
  }
`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    cursor: pointer;
    background-color: ${colors.grayLight};
  }
`;

export const DeleteSvg = styled(Delete)`
  width: 18px;
  height: 18px;
  fill: #52555f;
`;
