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
import {useAppDispatch, useAppSelector} from '../../redux/store';
import { BsFillBarChartFill } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";
import { BalanceNotification } from "../BalanceNotification/BalanceNotification";
import { selectBalance } from "../../redux/auth/auth-selectors";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {setUserBalance} from '../../redux/auth/auth-operations';

export const Balance = () => {
  const initBalance = useAppSelector(selectBalance);
  const dispatch = useAppDispatch();
  const [balance, setBalance] = useState(initBalance);

  useEffect(() => {
    setBalance(initBalance)
  }, [initBalance]);

  // const handleNotification = (e) => {
  //   document.querySelector(".balance-notification").classList.toggle("show");
  // };


  const handleChange = (e) => {
    const value = e.target.value
    setBalance(value);
  };

  console.log(initBalance);
  console.log(balance);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setUserBalance(+balance));
  };

  return (
    <>
      <BalanceContainer>
        <Link to={"/report"} className="reports-link">
          <span>Reports</span>
          <BsFillBarChartFill size={14} />
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
            onChange={handleChange}
            pattern="^[0-9]*$"
            // onMouseEnter={handleNotification}
            // onMouseLeave={handleNotification}
          ></BalanceInput>
          {balance === 0 && <BalanceNotification />}
          <BalanceBtn type="submit">CONFIRM</BalanceBtn>
        </BalanceForm>
        <DateSpan>
          <RxCalendar size={20} />
          <span>21.11.2012</span>
        </DateSpan>
      </BalanceContainer>
    </>
  );
};
