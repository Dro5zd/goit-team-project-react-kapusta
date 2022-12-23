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

import logo from "../../assets/images/svg/logo.svg";
import logout from "../../assets/images/svg/logout.svg";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { logoutUser } from "../../redux/auth/auth-operations";
import { useAppDispatch } from "../../redux/store";
import { ModalContent } from "../ModalContent/ModalContent";


export const Header = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const userName = useAppSelector(selectUsername)
let firstLetter=''
  const userNameCreator = (name = '') => {
    
    firstLetter = name.split('')[0].toUpperCase();
    const userName = firstLetter + name.split('@')[0].slice(1,name.length);
    return userName;
  };

  



  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };


  
  
  userNameCreator('artem@gmail.com')
  // const str = (name: string) => {
  //   const nameSearch = name.search('@')
  //   const lengthString = str.length
  //   const cutName = str.substring(nameSearch, lengthString)
  // }

  // const avatarCreator = (name: string) => {
  //   const nameSplit = name.split(' ');
  //   if (nameSplit.length > 1) {
  //     return nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
  //   } else {
  //     return nameSplit[0].charAt(0).toUpperCase();
  //   }
  // };


  // function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 16777215)
  //       .toString(16)
  //       .padStart(6, '0')}`;
  // }

  const logoutHadler = () => {
    dispatch(logoutUser());
    handleOpenModal();
  };

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
          <ModalContent
            onClose={handleOpenModal}
            logOut={logoutHadler}
            text="Do you really want to leave?"
          />
        </Modal>
      )}
    </>
  );
};
