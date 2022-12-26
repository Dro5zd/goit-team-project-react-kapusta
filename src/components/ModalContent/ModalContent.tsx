import close from "../../assets/images/svg/close.svg";
import { CloseBtn, Text } from "../Modal/Modal.styled";
import { ModalBtn } from "./ModalContent.styled";

interface IModalContent {
    onClose: ()=>void,
    action: ()=>void,
    type: "button" | "submit" | "reset" | undefined,
    text: string
}
export const ModalContent = ({ onClose, action, type, text }: IModalContent) => {
  return (
    <div style={{ position: "relative", padding: "30px" }}>
      <CloseBtn type="button" onClick={onClose}>
        <img src={close} alt="close" width={12} height={12} />
      </CloseBtn>
      <Text>{text}</Text>
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <ModalBtn type={type} onClick={action} color={ 'white'}>
          YES
        </ModalBtn>
        <ModalBtn type="button" onClick={onClose}>
          NO
        </ModalBtn>
      </div>
    </div>
  );
};
