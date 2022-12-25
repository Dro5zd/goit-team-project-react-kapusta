import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectExpenseCategories } from "../../../redux/transaction/transactions-selectors";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { CategoriesItemWrapper } from "../CategoriesItem/CategoriesItem.styled";
import { CategoriesListWrapper } from "./CategoriesList.styled";
import { ReactComponent as LeftArrow } from "../../../assets/images/svg/expenses/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/svg/expenses/arrow-right.svg";
import { StyledDiv } from "../../ExpensesTypes/ExpensesTypes.styled";
import { useFetch } from "../../../hooks/useFetch";
import { ReactComponent as Алкоголь } from "../../../assets/images/svg/expenses/alcohol.svg";
import { ReactComponent as Развлечения } from "../../../assets/images/svg/expenses/entertainment.svg";
import { ReactComponent as Здоровье } from "../../../assets/images/svg/expenses/health.svg";
import { ReactComponent as Транспорт } from "../../../assets/images/svg/expenses/transport.svg";
import { ReactComponent as Всё } from "../../../assets/images/svg/expenses/housing.svg";
import { ReactComponent as Техника } from "../../../assets/images/svg/expenses/technique.svg";
import { ReactComponent as Коммуналка } from "../../../assets/images/svg/expenses/communal.svg";
import { ReactComponent as Спорт } from "../../../assets/images/svg/expenses/hobbies.svg";
import { ReactComponent as Освіта } from "../../../assets/images/svg/expenses/education.svg";
import { ReactComponent as Прочее } from "../../../assets/images/svg/expenses/other.svg";

const CategoriesList = ({ categories }) => {
  const dispatch = useAppDispatch();

  // const arrExpenses = Object.keys(categories?.expensesData);
  // console.log('qwerty', arrExpenses);
  // console.log(categories);
  // console.log("arrExpenses ", arrExpenses);
  // const categoriesList = useAppSelector(selectExpenseCategories);
  const expense = [
    "Продукты",
    "Алкоголь",
    "Развлечения",
    "Здоровье",
    "Транспорт",
    "Всё для дома",
    "Техника",
    "Коммуналка и связь",
    "Спорт и хобби",
    "Образование",
    "Прочее",
  ];

  // useEffect(() => {
  //   dispatch(getExpenseCategories());
  // }, [dispatch]);
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
        {/* {arrExpenses?.map((category, index) => {
          // console.log(category, categories[category]);
          return <CategoriesItem category={category} key={index} />;
        })} */}

        {expense?.map((category, index) => (
          <CategoriesItem icon={Освіта} category={category} key={index} />
        ))}
      </CategoriesListWrapper>
    </StyledDiv>
  );
};

export default CategoriesList;
