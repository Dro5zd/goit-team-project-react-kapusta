import { ReactComponent as LeftArrow } from "../../assets/images/svg/expenses/arrow-left.svg";
import { ReactComponent as RightArrow } from "../../assets/images/svg/expenses/arrow-right.svg";
import { ReactComponent as ProductsIcon } from "../../assets/images/svg/expenses/products.svg";
import { ReactComponent as AlcoholIcon } from "../../assets/images/svg/expenses/alcohol.svg";
import { ReactComponent as EntertainmentIcon } from "../../assets/images/svg/expenses/entertainment.svg";
import { ReactComponent as HealthIcon } from "../../assets/images/svg/expenses/health.svg";
import { ReactComponent as TransportIcon } from "../../assets/images/svg/expenses/transport.svg";
import { ReactComponent as HousingIcon } from "../../assets/images/svg/expenses/housing.svg";
import { ReactComponent as TechniqueIcon } from "../../assets/images/svg/expenses/technique.svg";
import { ReactComponent as CommunalIcon } from "../../assets/images/svg/expenses/communal.svg";
import { ReactComponent as HobbiesIcon } from "../../assets/images/svg/expenses/hobbies.svg";
import { ReactComponent as EducationIcon } from "../../assets/images/svg/expenses/education.svg";
import { ReactComponent as OtherIcon } from "../../assets/images/svg/expenses/other.svg";
import { Link } from "react-router-dom";
import { StyledDiv } from "./ExpensesTypes.styled";

export const ExpensesTypes = () => {
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
      <ul className="expenses-list">
        <li>
          <Link to={"/"}>
            <p>5 000.00</p>
            <ProductsIcon />
            <h3>Products</h3>
          </Link>
        </li>
        {/* <li>
          <Link to={"/"}>
            <p>200.00</p>
            <AlcoholIcon />
            <h3>Alcohol</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>800.00</p>
            <EntertainmentIcon />
            <h3>Entertainment</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>900.00</p>
            <HealthIcon />
            <h3>Health</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>2 000.00</p>
            <TransportIcon />
            <h3>Transport</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>1 500.00</p>
            <HousingIcon />
            <h3>Housing</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>800.00</p>
            <TechniqueIcon />
            <h3>Technique</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>2 200.00</p>
            <CommunalIcon />
            <h3>Communal, communication</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>1 800.00</p>
            <HobbiesIcon />
            <h3>Sports, hobbies</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>2 400.00</p>
            <EducationIcon />
            <h3>Education</h3>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <p>3 000.00</p>
            <OtherIcon />
            <h3>Other</h3>
          </Link>
        </li> */}
      </ul>
    </StyledDiv>
  );
};
