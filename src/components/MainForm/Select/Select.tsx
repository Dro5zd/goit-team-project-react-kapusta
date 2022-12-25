import {MouseEvent, useEffect, useState} from 'react';
import vector from "../../../assets/images/svg/vector.svg";

import { SelectCategory, SelectHeader, SelectBody } from "./Select.styled";
import {ITransaction} from '../../../redux/transaction/transactionsSlice';

// interface ITFormProps {
//   type: string
//   onHandleSubmit: (data: ITransaction)=>void
// }

const Select = ({ onSelectedCategory, type }: any) => {
  const [selectCategory, setSelectCategory] = useState(false);
  const [elementCategory, setElementCategory] = useState("Product category");

  const expense =  [
      "Продукты",
      "Алкоголь",
      "Развлечения",
      "Здоровье",
      "Транспорт",
      "Всё для дома",
      "Техника",
      "Коммуналка и связь",
      "Спорт и хобби",
      "Образование",
      "Прочее",
    ]
    const income =  [
      "З/П",
      "Доп. доход"
    ]

  const[arr, setArr ]=useState([])

  useEffect(()=>{
    if(type === 'expense' ) {
      // @ts-ignore
      setArr(expense)
    } else {
      // @ts-ignore
      setArr(income)
    }
  }, [type])

  const onSelectHeader = () => {
    setSelectCategory(!selectCategory);
  };

  const onElementCategory = (event: MouseEvent<HTMLDivElement>) => {
    setSelectCategory(!selectCategory);
    setElementCategory((event.target as HTMLInputElement).innerText);
    onSelectedCategory((event.target as HTMLInputElement).innerText);
  };

  return (
    <SelectCategory>
      <SelectHeader onClick={onSelectHeader}>
        <span>{elementCategory}</span>
        <img src={vector} alt="vector" />
      </SelectHeader>
      {selectCategory && (
        <SelectBody>
          {arr.map((category) => (
            <div key={category} onClick={onElementCategory}>
              {category}
            </div>
          ))}
        </SelectBody>
      )}
    </SelectCategory>
  );
};

export default Select;
