import React from "react";
import {
  CategoriesIcon,
  CategoriesIconWrapper,
  CategoriesItemWrapper,
  CategoriesName,
  CategoriesTotalSum,
} from "./CategoriesItem.styled";

import { Link } from "react-router-dom";

const CategoriesItem = ({ category, icon: Icon }: any) => {
  // console.log("category", category);

  return (
    <CategoriesItemWrapper>
      <CategoriesTotalSum>5000</CategoriesTotalSum>
      <CategoriesIconWrapper>
        <Icon />
        {/* <CategoriesIcon active={"true"} /> */}
      </CategoriesIconWrapper>
      <CategoriesName>PRODUCTS</CategoriesName>
    </CategoriesItemWrapper>
  );
};

export default CategoriesItem;
