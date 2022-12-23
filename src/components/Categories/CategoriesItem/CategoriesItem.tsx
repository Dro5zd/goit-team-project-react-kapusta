import React from 'react';
import {
    CategoriesIcon, CategoriesIconWrapper,
    CategoriesItemWrapper,
    CategoriesName,
    CategoriesTotalSum
} from './CategoriesItem.styled';


const CategoriesItem = () => {
    return (
        <CategoriesItemWrapper>
            <CategoriesTotalSum>5000</CategoriesTotalSum>
            <CategoriesIconWrapper><CategoriesIcon active={'true'}/></CategoriesIconWrapper>
            <CategoriesName>PRODUCTS</CategoriesName>
        </CategoriesItemWrapper>
    );
};

export default CategoriesItem;