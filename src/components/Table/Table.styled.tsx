import styled from "styled-components";
import { colors } from "../../utils/colors";
import { ReactComponent as Delete } from "../../assets/images/svg/delete.svg";
import { device } from "../../utils/mixins";

export const TableBal = styled.table.attrs(props => ({
  className: props.className,
}))`
  width: 624px;
  margin-top: 48px;
  position: relative;
  border-collapse: collapse;
  display: none;
  flex-direction: column;

  ${device.desktop} {
    width: 746px;
  }

  th {
    height: 38px;
    background: ${colors.grayBg};
    border: none;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    border-collapse: collapse;
  }

 

  tr th:first-child {
    border-radius: 16px 0 0 0;
  }

  tr th:last-child {
    width: 100px;
    border-radius: 0 16px 0 0;
    ${device.desktop}{
      width: 114px;
    }
  }

  thead {
    justify-content: center;

    tr {
      justify-content: center;
      display: flex;

      th {
        align-items: center;
        justify-content: center;
        /* flex: 1 0 calc(100% / 5); */
        display: flex;
      }
    }
  }
   

  tbody {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    height: 344px;
    border: 2px solid ${colors.grayBg};
    border-top: none;

    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.grayBg};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.orange};
      border-radius: 8px;
    }

    tr {
      justify-content: center;
      display: flex;

      td {
        position: relative;
        align-items: center;
        justify-content: center;
        
        /* flex: 1 0 calc(100% / 5); */
        display: flex;
        
        height: 40px;
        border-bottom: 2px solid ${colors.grayBg};
      }
    }
  }

  /* tr td:first-child {
    border-left: 2px solid ${colors.grayBg};
  }

  tr td:last-child {
    padding-right: 50px;
    border-right: 2px solid ${colors.grayBg};
  } */

  ${device.tablet} {
    display: flex;
  }

  & .date{
    width: 104px;
    ${device.desktop}{
      width: 116px;
    }
    
  }
  & .description{
    width: 193px;
    
    ${device.desktop}{
      width: 206px;
    }
  }
  & .category{
    width: 131px;
    ${device.desktop}{
      width: 197px;
    }
  }
  & .sum{
    width: 107px;
    ${device.desktop}{
      width: 112px;
    }
  }
  & .sumRed{
    width: 107px;
    color: red;
    ${device.desktop}{
      width: 112px;
    }
  }
  & .sumGreen{
    width: 107px;
    color: green;
    ${device.desktop}{
      width: 112px;
    }
  }
  & .svg{
    width: 91px;
    ${device.desktop}{
      width: 103px;
    }
  }
  & .descriptionTd{
    width: 193px;
    max-width: 193px;
    padding-left: 40px;
    justify-content: flex-start;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    
    ${device.desktop}{
      width: 206px;
      max-width: 206px;
    }
  }

`;

export const DeleteBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 32px;
  height: 32px;
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

export const DeleteIcon = styled(Delete)`
  /* position: absolute; */
  fill: #52555f;
  width: 18px;
  height: 18px;
  
`;
