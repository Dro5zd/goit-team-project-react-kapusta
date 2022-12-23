import React from 'react';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import {CategoriesItemWrapper} from '../CategoriesItem/CategoriesItem.styled';
import {CategoriesListWrapper} from './CategoriesList.styled';

const CategoriesList = () => {
    return (
        <CategoriesListWrapper>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
            <CategoriesItem/>
        </CategoriesListWrapper>

    );
};

export default CategoriesList;