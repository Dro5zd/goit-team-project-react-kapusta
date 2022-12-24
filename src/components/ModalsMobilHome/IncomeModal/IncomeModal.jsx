import { BackgroundModal } from "../../BackgroundModal/BackgraundModal";
import Form from "../../MainForm/Form";
import { BackspaceButton, ContainerModal } from "./IncomeModal.styled";

const IncomeModal = ({ setIncBool }) => {
  const onBackspaceButton = () => {
    setIncBool(false);
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

export default IncomeModal;
