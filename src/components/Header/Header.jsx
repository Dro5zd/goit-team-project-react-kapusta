import {
  WrapperHeader,
  Logo,
  LinkHeader,
  BoxAvatar,
  UserName,
} from "./Header.styled";
import logo from "../../images/svg/logo.svg";
import logout from "../../images/svg/logout.svg";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <WrapperHeader>
        <Logo to="/" end="true">
          <img src={logo} alt="Kapusta" width={90} />
        </Logo>


        <BoxAvatar>U</BoxAvatar>
        <UserName>User Name</UserName>

        <LinkHeader>
          <img src={logout} alt="log-out" width={16} />
        </LinkHeader>
        {/* <LinkHeader><p>Exit</p></LinkHeader> */}
        {/* <Modal isOpen="isOpen" /> */}
      </WrapperHeader>
      {isOpen && (
        <Modal onClose={handleOpenModal}>
          <div>Modal content</div>
        </Modal>
      )}
    </>
  );
};
