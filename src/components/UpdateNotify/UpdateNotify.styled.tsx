import styled from 'styled-components';
import {BookContacts} from '@styled-icons/fluentui-system-filled/BookContacts';

export const UpdateNotifyWrapper = styled.div`
  width: 330px;
  left: 15px;
  top: 220px;
  position: absolute;
  border-radius: 15px;
  padding: 8px 20px 10px 50px;
  backdrop-filter: saturate(180%) blur(20px); 
  background-color: rgba(255, 255, 255, 0.7);
`;

export const UpdateNotifyDesc = styled.p`
  margin-top: 5px;
  font-size: 10px;
`;

export const ContactsNotifIcon = styled(BookContacts)`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: #aae8b0;
  border-radius: 20%;
  position: absolute;
  display: block;
  left: 10px;
  top: 23px;
  color: white;
`;
