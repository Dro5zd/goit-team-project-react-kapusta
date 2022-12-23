import close from "../../images/svg/close.svg";
import { CloseBtn, Text } from "../Modal/Modal.styled";
import { StyledButton } from "../Button/Button.styled";

export const ModalContent = ({ onClose, logOut, text }) => {
  return (
    <div style={{ position: "relative", padding: "30px" }}>
      <CloseBtn type="button" onClick={onClose}>
        <img src={close} alt="close" width={12} height={12} />
      </CloseBtn>
      <Text>{text}</Text>
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <StyledButton type="button" color="white" onClick={logOut}>
          YES
        </StyledButton>
        <StyledButton type="button" onClick={onClose}>
          NO
        </StyledButton>
      </div>
    </div>
  );
};
