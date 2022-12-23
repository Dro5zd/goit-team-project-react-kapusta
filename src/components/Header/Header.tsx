import { selectUsername } from "../../redux/auth/auth-selectors";
import {
  WrapperHeader,
  Logo,
  BoxAvatar,
  UserName,
  ExitLogo,
  ExitButton,
  UserInfo

} from "./Header.styled";
import logo from "../../images/svg/logo.svg";
import logout from "../../images/svg/logout.svg";
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/store";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useAppSelector(selectUsername)
let firstLetter=''
  const userNameCreator = (name = '') => {
    
    firstLetter = name.split('')[0].toUpperCase();
    const userName = firstLetter + name.split('@')[0].slice(1,name.length);
    return userName;
  };
//   useEffect(() => { 
//     @ts-ignore
// userNameCreator(userName)
//   }, [userName])
  
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  
  
  userNameCreator('artem@gmail.com')
  // const str = (name: string) => {
  //   const nameSearch = name.search('@')
  //   const lengthString = str.length
  //   const cutName = str.substring(nameSearch, lengthString)
  // }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
  }

  return (
    <>
      <WrapperHeader>
        <Logo to="/">
          <img src={logo} alt="Kapusta" width={90} />
        </Logo>
        <UserInfo> <BoxAvatar>{firstLetter}</BoxAvatar>
        <UserName>{userName}</UserName>
       
        <ExitLogo onClick={handleOpenModal} src={logout} alt="log-out" />
        
      
    <ExitButton type="button" onClick={handleOpenModal}>Exit</ExitButton>
</UserInfo>
       
      </WrapperHeader>
      {isOpen && (
        <Modal onClose={handleOpenModal}>
          <div>Modal content</div>
        </Modal>
      )}
    </>
  );
};
