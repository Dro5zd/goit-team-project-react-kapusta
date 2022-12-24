import { DeleteIcon, TableBal } from "./Table.styled";

const TableBalance = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <TableBal>
      <thead>
        <tr>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
          <th>SUM</th>
        </tr>
      </thead>

      <tbody>
        {arr.map((el) => (
          <tr key={el}>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>
              4 <DeleteIcon />
            </td>
          </tr>
        ))}
      </tbody>
    </TableBal>
  );
};

export default TableBalance;
