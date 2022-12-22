import {
  WrapperHeader,
  Logo,
  BoxAvatar,
  UserName,
  ExitLogo,
  Container,
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
  return (
    <>
      <WrapperHeader>
        <Container>
          <Logo to="/">
            <img src={logo} alt="Kapusta" width={90} />
          </Logo>
          <BoxAvatar>U</BoxAvatar>
          <UserName>User Name</UserName>
          <Link to={"/"}>
            <ExitLogo src={logout} alt="log-out" width={16} />
          </Link>
          {/* <LinkHeader><p>Exit</p></LinkHeader> */}
        </Container>
      </WrapperHeader>
      {isOpen && (
        <Modal onClose={handleOpenModal}>
          <div>Modal content</div>
        </Modal>
      )}
    </>
  );
};
