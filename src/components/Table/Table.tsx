import { useAppDispatch } from "../../redux/store";
import {
  deleteExpenseTransaction,
  deleteIncomesTransaction,
} from "../../redux/transaction/transactions-operations";
import { DeleteBtn, DeleteIcon, TableBal } from "./Table.styled";

import { ITransaction } from "../../redux/transaction/transactionsSlice";
import { useEffect, useState } from "react";
// import styled from "styled-components";

interface ITableBalanceProps {
  expensesList?: ITransaction[];
  incomeList?: ITransaction[];
}
const TableBalance = ({ expensesList, incomeList, expensesForm }: any) => {
  const dispatch = useAppDispatch();
  const [arr, setArr] = useState([]);

  const expensesBool = expensesForm === "/home/expenses";
  const classNameTd = expensesBool ? "sumRed" : "sumGreen";

  useEffect(() => {
    if (expensesList) {
      setArr(expensesList);
    } else {
      setArr(incomeList);
    }
  }, [expensesList, incomeList]);

  const deleteExpense = (id: any) => {
    dispatch(
      expensesList ? deleteExpenseTransaction(id) : deleteIncomesTransaction(id)
    );
  };

  return (
    <TableBal>
      <thead>
        <tr>
          <th className={"date"}>DATE</th>
          <th className={"description"}>DESCRIPTION</th>
          <th className={"category"}>CATEGORY</th>
          <th className={"sum"}>SUM</th>
          <th className={"svg"}></th>
        </tr>
      </thead>

      <tbody>
        {arr?.map(
          ({ amount, category, date, description, _id }: ITransaction) => (
            <tr key={_id}>
              <td className={"date"}>{date}</td>
              <td className={"descriptionTd"}><span>{description}</span></td>
              <td className={"category"}>{category}</td>
              <td className={classNameTd}>
                {expensesBool ? -amount : amount} UAH
              </td>
              <td className={"svg"}>
                {/* <span>{_id}</span> */}
                <DeleteBtn type="button" onClick={() => deleteExpense(_id)}>
                  <DeleteIcon />
                </DeleteBtn>
              </td>
            </tr>
          )
        )}
      </tbody>
    </TableBal>
  );
};

export default TableBalance;
