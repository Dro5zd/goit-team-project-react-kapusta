import styled from 'styled-components';
import {Exit} from '@styled-icons/icomoon/Exit';
import {ArrowLeftCircleFill} from '@styled-icons/bootstrap/ArrowLeftCircleFill';

export const BackIcon = styled(ArrowLeftCircleFill)`
  left: 21px;
  top: 44px;
  width: 25px;
  position: absolute;
  color: grey;
  cursor: pointer;
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 41px 10px 10px 10px;
  gap: 10px;
  width: 100%;
  background-color: #cecece;
`;

export const UserMenuTitle = styled.p`
  font-weight: bold;
`;

export const ExitIcon = styled(Exit)`
  margin-top: 5px;
  color: grey;
  width: 25px;
  cursor: pointer;
 
`;