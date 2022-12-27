import React from "react";
import {
  CategoriesIconWrapper,
  CategoriesItemWrapper,
  CategoriesName,
  CategoriesTotalSum, ShadowIcon,
} from './CategoriesItem.styled';


import { Link } from "react-router-dom";

const CategoriesItem = ({ title, total, icon: Icon, onclickHandle, active }: any) => {

    return (
        <CategoriesItemWrapper onClick={(e) => onclickHandle(e, title)}>
          <CategoriesTotalSum>{total}</CategoriesTotalSum>
          <CategoriesIconWrapper >
            <Icon className="category" active={active}/>
            <ShadowIcon active={active} />
            {/* <CategoriesIcon active={"true"} /> */}
          </CategoriesIconWrapper>
          <CategoriesName>{title}</CategoriesName>
        </CategoriesItemWrapper>
  );
};

export default CategoriesItem;
