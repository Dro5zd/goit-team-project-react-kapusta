import React from "react";
import {
  CategoriesIconWrapper,
  CategoriesItemWrapper,
  CategoriesName,
  CategoriesTotalSum,
  ShadowIcon,
} from "./CategoriesItem.styled";

import { Link } from "react-router-dom";

const CategoriesItem = ({
  title,
  total,
  icon: Icon,
  onclickHandle,
  active,
}) => {
  return (
    <CategoriesItemWrapper onClick={(e) => onclickHandle(e, title)}>
      <CategoriesTotalSum>{total}</CategoriesTotalSum>
      <CategoriesIconWrapper active={active}>
        <Icon className="category" active={active} />
        <ShadowIcon active={active} />
      </CategoriesIconWrapper>
      <CategoriesName>{title}</CategoriesName>
    </CategoriesItemWrapper>
  );
};

export default CategoriesItem;
