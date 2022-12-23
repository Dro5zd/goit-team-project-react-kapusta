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
import { useAppSelector } from "../../redux/store";
import { RxCalendar } from "react-icons/rx";
import { BalanceNotification } from "../BalanceNotification/BalanceNotification";
import { selectBalance } from "../../redux/auth/auth-selectors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInitBalance } from "../../redux/auth/authSlice";
import chart from "../../images/svg/balance/bar-chart.svg";

export const Balance = () => {
  const initBalance = useAppSelector(selectBalance);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(initBalance);

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setInitBalance(balance));
  };

  return (
    <>
      <BalanceContainer>
        <Link to={"/"} className="reports-link">
          <span>Reports</span>
          <img src={chart} alt="chart" />
        </Link>
        <BalanceForm onSubmit={handleSubmit}>
          <BalanceLabel htmlFor="balance">
            Balance
            <DoubleDots>:</DoubleDots>
          </BalanceLabel>
          <BalanceInput
            type="number"
            name="balance"
            id="balance"
            value={balance}
            placeholder="00.00 UAH"
            min="0.00"
            step=".1"
            onChange={handleChange}
          ></BalanceInput>
          {balance === 0 && <BalanceNotification />}
          <BalanceBtn type="sumbit">CONFIRM</BalanceBtn>
        </BalanceForm>
        <DateSpan>
          <RxCalendar size={20} />
          <span>21.11.2012</span>
        </DateSpan>
      </BalanceContainer>
    </>
  );
};
