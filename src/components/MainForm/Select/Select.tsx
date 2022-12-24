import { MouseEvent, useState } from "react";
import vector from "../../../assets/images/svg/vector.svg";

import { SelectCategory, SelectHeader, SelectBody } from "./Select.styled";

const Select = ({ onSelectedCategory }: any) => {
  const [selectCategory, setSelectCategory] = useState(false);
  const [elementCategory, setElementCategory] = useState("Product category");

  const arr = [
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
  ];

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
          {arr.map((el) => (
            <div key={el} onClick={onElementCategory}>
              {el}
            </div>
          ))}
        </SelectBody>
      )}
    </SelectCategory>
  );
};

export default Select;
