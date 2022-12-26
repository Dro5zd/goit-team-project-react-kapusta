import { useAppDispatch } from "../../../redux/store";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { CategoriesListWrapper, StyledDiv } from "./CategoriesList.styled";
import { ReactComponent as LeftArrow } from "../../../assets/images/svg/expenses/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/svg/expenses/arrow-right.svg";
// import { StyledDiv } from "../../ExpensesTypes/ExpensesTypes.styled";
import { categoryData } from "./CategoriesData";
import { useState } from "react";

const CategoriesList = ({ categories, onclickHandle }) => {
  const [activeCategory, setActiveCategory] = useState(
    categories?.[0]?.category
  );

  console.log("categories", categories, activeCategory);

  const createCategoryIcon = (catName) => {
    const categoryObj = categoryData.find((el) => el.category === catName);
    return categoryObj.icon;
  };

  const onClickItem = (e, title) => {
    onclickHandle(e, title);
    setActiveCategory(title);
  };

  return (
    <StyledDiv>
      <div className="buttons-wrapper">
        <button type="button" className="arrow-btn">
          <LeftArrow />
        </button>
        <h2 className="expenses-title">EXPENSES</h2>
        <button type="button" className="arrow-btn">
          <RightArrow />
        </button>
      </div>
      <CategoriesListWrapper>
        {categories?.map(({ category, total }, index) => {
          return (
            <CategoriesItem
              icon={createCategoryIcon(category)}
              key={index}
              title={category}
              total={total}
              active={category === activeCategory}
              onclickHandle={(e) => onClickItem(e, category)}
            />
          );
        })}
      </CategoriesListWrapper>
    </StyledDiv>
  );
};

export default CategoriesList;
