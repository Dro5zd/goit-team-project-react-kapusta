import { useState } from "react";
import vector from "../../../images/svg/vector.svg";

import { SelectCategory, SelectHeader, SelectBody } from "./SelectStyled";

const Select = () => {
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

  const onElementCategory = (event) => {
    setSelectCategory(!selectCategory);
    setElementCategory(event.target.innerText);
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
