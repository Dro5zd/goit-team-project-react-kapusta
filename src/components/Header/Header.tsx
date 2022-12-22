import {
  WrapperHeader,
  Logo,
  BoxAvatar,
  UserName,
  ExitLogo,
} from "./Header.styled";
import logo from "../../images/svg/logo.svg";
import logout from "../../images/svg/logout.svg";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const avatarCreator = (name: string) => {
    const nameSplit = name.split(' ');
    if (nameSplit.length > 1) {
      return nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
    } else {
      return nameSplit[0].charAt(0).toUpperCase();
    }
  };

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
        <BoxAvatar>U</BoxAvatar>
        <UserName>User Name</UserName>
        {/*<Link to={"/"}>*/}
          <ExitLogo onClick={handleOpenModal} src={logout} alt="log-out" width={16} />
        {/*</Link>*/}
        <p>Exit</p>
      </WrapperHeader>
      {isOpen && (
        <Modal onClose={handleOpenModal}>
          <div>Modal content</div>
        </Modal>
      )}
    </>
  );
};
