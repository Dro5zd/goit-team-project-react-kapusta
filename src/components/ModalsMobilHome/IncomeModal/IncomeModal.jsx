import { useAppDispatch } from "../../../redux/store";
import { addIncome } from "../../../redux/transaction/transactions-operations";
import { BackgroundModal } from "../../BackgroundModal/BackgraundModal";
import Form from "../../MainForm/Form";
import { BackspaceButton, ContainerModal } from "./IncomeModal.styled";

const IncomeModal = ({ setIncBool, onAddTransaction }) => {
  const dispatch = useAppDispatch();
  const onBackspaceButton = () => {
    setIncBool(false);
  };

  const onHandleSubmit = (data) => {
    // console.log("ExpensesModal", data);
    onAddTransaction(data);
    dispatch(addIncome(data));
  };

  return (
    <BackgroundModal>
      <ContainerModal>
        <BackspaceButton onClick={onBackspaceButton} />
        <Form onHandleSubmit={onHandleSubmit} />
      </ContainerModal>
    </BackgroundModal>
  );
};

export default IncomeModal;
