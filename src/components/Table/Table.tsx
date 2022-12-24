import { useAppDispatch } from "../../redux/store";
import { deleteTransaction } from "../../redux/transaction/transactions-operations";
import { DeleteBtn, DeleteIcon, TableBal } from "./Table.styled";

const TableBalance = ({ expensesList }: any) => {
  const dispatch = useAppDispatch();
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  // console.log("expensesList", expensesList);

  const deleteExpense = (id: any) => {
    console.log("dele", id);

    dispatch(deleteTransaction(id));
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
        {expensesList?.map(
          ({ amount, category, date, description, _id }: any) => (
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
