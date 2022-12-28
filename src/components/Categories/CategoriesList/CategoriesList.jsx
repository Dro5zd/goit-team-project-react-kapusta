import { useAppDispatch } from "../../../redux/store";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { CategoriesListWrapper, StyledDiv } from "./CategoriesList.styled";
import { ReactComponent as LeftArrow } from "../../../assets/images/svg/expenses/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/svg/expenses/arrow-right.svg";
import { categoryData } from "./CategoriesData";
import { useEffect, useState } from "react";

const CategoriesList = ({
  categories,
  onclickHandle,
  categoriesIncome,
  onChangeType,
}) => {
  const [categoryTitle, setCategoryTitle] = useState("EXPENSES");
  const [categoriesList, setCategoriesList] = useState(categories);
  const [activeCategory, setActiveCategory] = useState(
    categories?.[0]?.category
  );

  // console.log("categoriesLis", categoriesList);

  useEffect(() => {
    if (categoryTitle === "EXPENSES") {
      setCategoriesList(categories);
      setActiveCategory(categories?.[0]?.category);
    } else {
      setCategoriesList(categoriesIncome);
      setActiveCategory(categoriesIncome?.[0]?.category);
    }
  }, [categoryTitle]);

  const handleCategoryChanger = () => {
    if (categoryTitle === "EXPENSES") {
      setCategoryTitle("INCOME");
      onChangeType("INCOME");
    } else {
      setCategoryTitle("EXPENSES");
      onChangeType("EXPENSES");
    }
  };

  const createCategoryIcon = (catName) => {
    const categoryObj = categoryData.find((el) => el.category === catName);
    return categoryObj.icon;
  };

  const onClickItem = (e, title) => {
    onclickHandle(e, title, categoryTitle);
    setActiveCategory(title);
  };

  return (
    <StyledDiv>
      <div className="buttons-wrapper">
        <button
          type="button"
          className="arrow-btn"
          onClick={handleCategoryChanger}
        >
          <LeftArrow />
        </button>
        <h2 className="expenses-title">{categoryTitle}</h2>
        <button
          type="button"
          className="arrow-btn"
          onClick={handleCategoryChanger}
        >
          <RightArrow />
        </button>
      </div>
      <CategoriesListWrapper className="HELLOO">
        {categoriesList?.map(({ category, total }, index) => {
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
