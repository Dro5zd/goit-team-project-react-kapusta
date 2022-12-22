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
import { BsFillBarChartFill } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";
import { BalanceNotification } from "../BalanceNotification/BalanceNotification";
import { selectBalance } from "../../redux/auth/auth-selectors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInitBalance } from "../../redux/auth/authSlice";

export const Balance = () => {
  const initBalance = useAppSelector(selectBalance);
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(initBalance);

  useEffect(() => {}, [balance]);

  // const handleNotification = (e) => {
  //   document.querySelector(".balance-notification").classList.toggle("show");
  // };

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    dispatch(setInitBalance(balance));
  };

  return (
    <>
      <BalanceContainer>
        <Link to={"/"} className="reports-link">
          <span>Reports</span>
          <BsFillBarChartFill size={14} />
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
            onChange={handleChange}

            // onMouseEnter={handleNotification}
            // onMouseLeave={handleNotification}
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
