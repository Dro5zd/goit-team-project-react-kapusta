import { BackgroundModal } from "../../BackgroundModal/BackgraundModal";
import Form from "../../MainForm/Form";
import { BackspaceButton, ContainerModal } from "./ExpensesModal.styled";

const ExpensesModal = ({ setExpBool }) => {
  const onBackspaceButton = () => {
    setExpBool(false);
  };
  return (
    <BackgroundModal>
      <ContainerModal>
        <BackspaceButton onClick={onBackspaceButton} />
        <Form />
      </ContainerModal>
    </BackgroundModal>
  );
};

export default ExpensesModal;
