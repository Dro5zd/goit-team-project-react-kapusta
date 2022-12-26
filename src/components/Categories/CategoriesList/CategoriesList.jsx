import {useAppDispatch} from '../../../redux/store';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
import {CategoriesListWrapper} from './CategoriesList.styled';
import {ReactComponent as LeftArrow} from '../../../assets/images/svg/expenses/arrow-left.svg';
import {ReactComponent as RightArrow} from '../../../assets/images/svg/expenses/arrow-right.svg';
import {StyledDiv} from '../../ExpensesTypes/ExpensesTypes.styled';
import {ReactComponent as Alcohol} from '../../../assets/images/svg/expenses/alcohol.svg';
import {ReactComponent as Entertainment} from '../../../assets/images/svg/expenses/entertainment.svg';
import {ReactComponent as Health} from '../../../assets/images/svg/expenses/health.svg';
import {ReactComponent as Transport} from '../../../assets/images/svg/expenses/transport.svg';
import {ReactComponent as Техника} from '../../../assets/images/svg/expenses/technique.svg';
import {ReactComponent as Прочее} from '../../../assets/images/svg/expenses/other.svg';
import {ReactComponent as Housing} from '../../../assets/images/svg/expenses/housing.svg';

const CategoriesList = ({ categories }) => {
  const dispatch = useAppDispatch();

  // const arrExpenses = Object.keys(categories?.expensesData);
  // console.log('qwerty', arrExpenses);
  // console.log(categories);
  // console.log("arrExpenses ", arrExpenses);
  // const categoriesList = useAppSelector(selectExpenseCategories);



  const categoryData = [
    {
      category: "Здоровье",
      icon: Health
    },
    {
      category: "Транспорт",
      icon: Transport
    },
    {
      category: "Техника",
      icon: Housing
    } ,
    {
      category: "Продукты",
      icon: Housing
    } ,
    {
      category: "Всё для дома",
      icon: Housing
    } ,
    {
      category: "Коммуналка и связь",
      icon: Housing
    } ,
    {
      category: "Спорт и хобби",
      icon: Housing
    } ,
    {
      category: "Образование",
      icon: Housing
    } ,
    {
      category: "Развлечения",
      icon: Housing
    } ,
    {
      category: "Образование",
      icon: Housing
    } ,
    {
      category: "Прочее",
      icon: Housing
    }
    // "Продукты" ,
    // "Алкоголь",
    // "Развлечения",
    // "Здоровье",
    // "Транспорт",
    // "Всё для дома",
    // "Техника",
    // "Коммуналка и связь",
    // "Спорт и хобби",
    // "Образование",
    // "Прочее",
  ];
  const createCategoryIcon = (catName) => {
    const catIcon = categoryData.find(el => el.category === catName)
    console.log('catIcon', catIcon);
    return catIcon.icon
  }

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


        {categories?.map(({category, total}, index) => {
          const icon = createCategoryIcon(category)
            console.log(typeof icon);
          return <CategoriesItem icon={icon} title={category} total={total} key={index} />
        }
        )}
      </CategoriesListWrapper>
    </StyledDiv>
  );
};

export default CategoriesList;
