import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BackgroundMain } from "../../components/BackgroundMain/BackgroundMain";

import { Container } from "../../globalStyles";
import {
  BlockLink,
  BlockLinkMobil,
  ButtonLink,
  ButtonLinkMobil,
  ContainerMobileHome,
} from "./Home.styled";
import { Balance } from "../../components/Balance/Balance";
import { BackgroundMobil } from "../../components/BackgroundMobil/BackgroundMobil";
import ExpensesModal from "../../components/ModalsMobilHome/ExpensesModal/ExpensesModal";
import IncomeModal from "../../components/ModalsMobilHome/IncomeModal/IncomeModal";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  deleteExpenseTransaction,
  deleteIncomesTransaction,
  getExpenseCategories,
} from "../../redux/transaction/transactions-operations";
import HomeList from "../../components/HomeList/HomeList";
import { getUser } from "../../redux/auth/auth-operations";
import {
  selectToken,
  selectTransactions,
} from "../../redux/auth/auth-selectors";

const Home = () => {
  const dispatch = useAppDispatch();
  const [isModalExp, setIsModalExp] = useState(false);
  const [isModalInc, setIsModalInc] = useState(false);
  const transactions = useAppSelector(selectTransactions);
  const navigate = useNavigate();

  const [transactionsList, setTransactionsList] = useState(transactions);

  // const color = transactions.category;

  const deleteExpense = (id, color) => {
    const filterArr = transactionsList.filter((el) => el._id !== id);
    setTransactionsList(filterArr);

    dispatch(
      color === "red"
        ? deleteExpenseTransaction(id)
        : deleteIncomesTransaction(id)
    );
  };

  useEffect(() => {
    dispatch(getExpenseCategories());
    dispatch(getUser());
  }, [dispatch]);

  const onButtonExpense = () => {
    setIsModalExp(true);
    navigate("/home/expenses");
  };
  const onButtonIncome = () => {
    setIsModalInc(true);
    navigate("/home/income");
  };

  const onAddTransaction = (data) => {
    dispatch(getUser());
    // console.log("onAddTransaction", data);
  };

  return (
    <>
      <BackgroundMain>
        <Container>
          <Balance />
          <BlockLink>
            <ButtonLink to="/home/expenses">EXPENSES </ButtonLink>
            <ButtonLink to="/home/income">INCOME</ButtonLink>
          </BlockLink>
          <Outlet />
        </Container>
      </BackgroundMain>

      <BackgroundMobil>
        <ContainerMobileHome>
          <Balance />
          <div>
            <HomeList
              deleteExpense={deleteExpense}
              transactions={transactionsList}
              // onAddTransaction={onAddTransaction}
            />
          </div>
          <BlockLinkMobil>
            <ButtonLinkMobil onClick={onButtonExpense}>
              EXPENSES
            </ButtonLinkMobil>
            <ButtonLinkMobil onClick={onButtonIncome}>INCOME</ButtonLinkMobil>
          </BlockLinkMobil>
        </ContainerMobileHome>
        {isModalExp && (
          <ExpensesModal
            setExpBool={setIsModalExp}
            onAddTransaction={onAddTransaction}
          />
        )}
        {isModalInc && (
          <IncomeModal
            setIncBool={setIsModalInc}
            onAddTransaction={onAddTransaction}
          />
        )}
      </BackgroundMobil>
    </>
  );
};
export default Home;
