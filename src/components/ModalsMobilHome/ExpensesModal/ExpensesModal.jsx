import { useNavigate } from "react-router-dom";
import { getUser } from "../../../redux/auth/auth-operations";
import { useAppDispatch } from "../../../redux/store";
import {
  addExpense,
  getExpense,
} from "../../../redux/transaction/transactions-operations";
import { BackgroundModal } from "../../BackgroundModal/BackgraundModal";
import Form from "../../MainForm/Form";
import { BackspaceButton, ContainerModal } from "./ExpensesModal.styled";

const ExpensesModal = ({ setExpBool }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onBackspaceButton = () => {
    navigate("/home");
    setExpBool(false);
  };

  const onHandleSubmit = (data) => {
    console.log("ExpensesModal", data);
    dispatch(addExpense(data));
    dispatch(getExpense());
  };

  return (
    <BackgroundModal>
      <ContainerModal>
        <BackspaceButton onClick={onBackspaceButton} />
        <Form type="expense" onHandleSubmit={onHandleSubmit} />
      </ContainerModal>
    </BackgroundModal>
  );
};

export default ExpensesModal;
