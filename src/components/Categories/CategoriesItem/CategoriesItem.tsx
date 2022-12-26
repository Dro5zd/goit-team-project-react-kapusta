import React from "react";
import {
  CategoriesIcon,
  CategoriesIconWrapper,
  CategoriesItemWrapper,
  CategoriesName,
  CategoriesTotalSum,
} from "./CategoriesItem.styled";


import { Link } from "react-router-dom";

const CategoriesItem = ({ title, total, icon: Icon }: any) => {
  // console.log("category", category);

  return (
    <CategoriesItemWrapper>
      <CategoriesTotalSum>{total}</CategoriesTotalSum>
      <CategoriesIconWrapper>
        <Icon />
        {/* <CategoriesIcon active={"true"} /> */}
      </CategoriesIconWrapper>
      <CategoriesName>{title}</CategoriesName>
    </CategoriesItemWrapper>
  );
};

export default CategoriesItem;
