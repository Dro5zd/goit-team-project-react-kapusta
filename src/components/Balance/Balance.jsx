import { Link } from "react-router-dom";
import {
  BalanceBtn,
  BalanceContainer,
  BalanceForm,
  BalanceInput,
  BalanceLabel,
  DateSpan,
  DoubleDots,
} from "./Balance.styled";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { RxCalendar } from "react-icons/rx";
import { BalanceNotification } from "../BalanceNotification/BalanceNotification";
import { selectBalance } from "../../redux/auth/auth-selectors";
import { useState, useEffect } from "react";
import { setUserBalance } from "../../redux/auth/auth-operations";
import { Modal } from "../Modal/Modal";
import { ModalContent } from "../ModalContent/ModalContent";
import chart from "../../images/svg/balance/bar-chart.svg";

export const Balance = () => {
  const initBalance = useAppSelector(selectBalance);
  const dispatch = useAppDispatch();
  const [balance, setBalance] = useState(initBalance);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setBalance(initBalance);
  }, [initBalance]);

  const handleChange = (e) => {
    const value = e.target.value;
    setBalance(value);
  };

  console.log(initBalance);
  console.log(balance);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleOpenModal();
  };

  const confirmHandler = (e) => {
    dispatch(setUserBalance(+balance));
    e.preventDefault();
    handleOpenModal();
  };

  return (
    <>
      <BalanceContainer>
        <Link to={"/report"} className="reports-link">
          <span>Reports</span>
          <img src={chart} alt="chart" />
        </Link>
        <BalanceForm onSubmit={handleSubmit}>
          <BalanceLabel htmlFor="balance">
            Balance
            <DoubleDots>:</DoubleDots>
          </BalanceLabel>
          <BalanceInput
            type="text"
            name="balance"
            id="balance"
            value={balance}
            placeholder="00.00 UAH"
            min="0.00"
            onChange={handleChange}
            pattern="^[0-9]*$"
          ></BalanceInput>
          {balance === 0 && <BalanceNotification />}
          <BalanceBtn type="submit">CONFIRM</BalanceBtn>
        </BalanceForm>
        <DateSpan>
          <RxCalendar size={20} />
          <span>21.11.2012</span>
        </DateSpan>
      </BalanceContainer>
      {isOpen && (
        <Modal onClose={handleOpenModal}>
          <ModalContent
            onClose={handleOpenModal}
            action={confirmHandler}
            text="Are you sure?"
            type="submit"
          />
        </Modal>
      )}
    </>
  );
};
