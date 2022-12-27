import { useAppDispatch } from "../../../redux/store";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { CategoriesListWrapper } from "./CategoriesList.styled";
import { ReactComponent as LeftArrow } from "../../../assets/images/svg/expenses/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/svg/expenses/arrow-right.svg";
import { StyledDiv } from "../../ExpensesTypes/ExpensesTypes.styled";
import { ReactComponent as Alcohol } from "../../../assets/images/svg/expenses/alcohol.svg";
import { ReactComponent as Products } from "../../../assets/images/svg/expenses/products.svg";
import { ReactComponent as Entertainment } from "../../../assets/images/svg/expenses/entertainment.svg";
import { ReactComponent as Health } from "../../../assets/images/svg/expenses/health.svg";
import { ReactComponent as Transport } from "../../../assets/images/svg/expenses/transport.svg";
import { ReactComponent as Technique } from "../../../assets/images/svg/expenses/technique.svg";
import { ReactComponent as Other } from "../../../assets/images/svg/expenses/other.svg";
import { ReactComponent as Housing } from "../../../assets/images/svg/expenses/housing.svg";
import { ReactComponent as Communal } from "../../../assets/images/svg/expenses/communal.svg";
import { ReactComponent as Hobbies } from "../../../assets/images/svg/expenses/hobbies.svg";
import { ReactComponent as Education } from "../../../assets/images/svg/expenses/education.svg";
import { categoryData } from "./CategoriesData";

const CategoriesList = ({ categories, onclickHandle }) => {
  // const categoryData = [
  //   {
  //     category: "Продукты",
  //     icon: Products
  //   } ,
  //   {
  //     category: "Alcohol",
  //     icon: Alcohol
  //   } ,
  //   {
  //     category: "Развлечения",
  //     icon: Entertainment
  //   } ,
  //   {
  //     category: "Здоровье",
  //     icon: Health
  //   },
  //   {
  //     category: "Транспорт",
  //     icon: Transport
  //   },
  //   {
  //     category: "Всё для дома",
  //     icon: Housing
  //   } ,
  //   {
  //     category: "Техника",
  //     icon: Technique
  //   } ,
  //   {
  //     category: "Коммуналка и связь",
  //     icon: Communal
  //   } ,
  //   {
  //     category: "Спорт и хобби",
  //     icon: Hobbies
  //   } ,
  //   {
  //     category: "Образование",
  //     icon: Education
  //   } ,
  //   {
  //     category: "Прочее",
  //     icon: Other
  //   }
  // ];
  const createCategoryIcon = (catName) => {
    const categoryObj = categoryData.find((el) => el.category === catName);
    return categoryObj.icon;
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
              onclickHandle={onclickHandle}
            />
          );
        })}
      </CategoriesListWrapper>
    </StyledDiv>
  );
};

export default CategoriesList;
