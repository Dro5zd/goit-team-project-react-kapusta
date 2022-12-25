import { useAppDispatch } from "../../redux/store";
import {deleteExpenseTransaction, deleteIncomesTransaction} from '../../redux/transaction/transactions-operations';
import { DeleteBtn, DeleteIcon, TableBal } from "./Table.styled";
import {ITransaction} from '../../redux/transaction/transactionsSlice';
import {useEffect, useState} from 'react';

interface ITableBalanceProps {
    expensesList?: ITransaction[]
    incomeList?: ITransaction[]
}
const TableBalance = ({ expensesList, incomeList }: any) => {
  const dispatch = useAppDispatch();
  const[arr, setArr ]=useState([])

  useEffect(()=>{
      if(expensesList ) {
          setArr(expensesList)
      } else {
          setArr(incomeList)
      }
  }, [expensesList, incomeList])
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // console.log("expensesList", expensesList);

  const deleteExpense = (id: any) => {
dispatch(expensesList ? deleteExpenseTransaction(id) :  deleteIncomesTransaction(id))
  };

  return (
    <TableBal>
      <thead>
        <tr>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
          <th>SUM</th>
          <th></th>
        </tr>
      </thead>

      <tbody>

        {arr?.map(
          ({ amount, category, date, description, _id }: ITransaction) => (
            <tr key={_id}>
              <td>{date}</td>
              <td>{description}</td>
              <td>{category}</td>
              <td>{amount}</td>
              <td>
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
