import styled from 'styled-components';
import {Exit} from '@styled-icons/icomoon/Exit';
import {Home} from '@styled-icons/boxicons-solid/Home';
import {Link} from 'react-router-dom';


export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 40px 15px 10px 15px;
  gap: 10px;
  width: 100%;
  background-color: #cecece;
`;

export const UserMenuTitle = styled.p`
  font-weight: bold;
`;

export const BackIconLink = styled(Link)`
  margin-right: auto;
`;
export const BackIcon = styled(Home)`
  width: 25px;
  
  color: grey;
  cursor: pointer;
`;

export const ExitIcon = styled(Exit)`
  margin-top: 3px;
  color: grey;
  width: 25px;
  cursor: pointer;
 
`;