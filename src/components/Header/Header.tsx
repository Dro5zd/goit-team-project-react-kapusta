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
import close from '../../images/svg/close.svg'
import { CloseBtn, Text } from "../Modal/Modal.styled";
import { StyledButton } from "../Button/Button.styled";
import { logoutUser } from "../../redux/auth/auth-operations";
import { useAppDispatch } from "../../redux/store";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
const dispatch = useAppDispatch()

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };


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
          <div style={{position: 'relative', padding: '30px'}}>
            <CloseBtn type="button" onClick={handleOpenModal}>
              <img src={close} alt="close" width={12} height={12} />
            </CloseBtn>
            <Text>Do you really want to leave?</Text>
            <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
              <StyledButton type="button" color="white" onClick={() => dispatch(logoutUser())}>YES
              </StyledButton>
              <StyledButton type="button" onClick={handleOpenModal}>NO</StyledButton>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
