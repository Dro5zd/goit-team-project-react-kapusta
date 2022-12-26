import React from "react";
import {
  CategoriesIconWrapper,
  CategoriesItemWrapper,
  CategoriesName,
  CategoriesTotalSum,
} from "./CategoriesItem.styled";


import { Link } from "react-router-dom";

const CategoriesItem = ({ title, total, icon: Icon, onclickHandle }: any) => {

    return (
    <CategoriesItemWrapper onClick={(e)=>onclickHandle(e, title)}>
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
