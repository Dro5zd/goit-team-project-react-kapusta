import { useState } from "react";
import { selectTransactions } from "../../redux/auth/auth-selectors";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  deleteExpenseTransaction,
  deleteIncomesTransaction,
} from "../../redux/transaction/transactions-operations";
import {
  BlockAction,
  Item,
  List,
  BoxDate,
  BoxMony,
  DeleteBtn,
} from "./HomeList.styled";
import { DeleteSvg } from "./HomeList.styled";

const HomeList = ({ deleteExpense, transactions }) => {
  // const dispatch = useAppDispatch();
  // const [transactionsList, setTransactionsList] = useState(transactions);

  // // const color = transactions.category;

  // const deleteExpense = (id, color) => {
  //   const filterArr = transactionsList.filter((el) => el._id !== id);
  //   setTransactionsList(filterArr);

  //   dispatch(
  //     color === "red"
  //       ? deleteExpenseTransaction(id)
  //       : deleteIncomesTransaction(id)
  //   );
  // };

  return (
    <List>
      {transactions?.map(({ description, date, category, amount, _id }) => {
        const color =
          category === "Доп. доход" || category === "З/П" ? "green" : "red";
        return (
          <Item key={_id}>
            <BlockAction>
              <h3>{description}</h3>
              <BoxDate>
                <p>{date}</p>
                <p>{category}</p>
              </BoxDate>
            </BlockAction>
            <BoxMony>
              <p className={color}>
                {color === "red" && "-"} {amount}.00 UAH.
              </p>
              <DeleteBtn
                type="button"
                onClick={() => deleteExpense(_id, color)}
              >
                <DeleteSvg />
              </DeleteBtn>
            </BoxMony>
          </Item>
        );
      })}
    </List>
  );
};

export default HomeList;
