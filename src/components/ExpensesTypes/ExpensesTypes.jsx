import { Link } from "react-router-dom";
import leftArrow from "../../images/svg/expenses/arrow-left.svg";
import rightArrow from "../../images/svg/expenses/arrow-right.svg";
import productsIcon from "../../images/svg/expenses/products.svg";
import alcoholIcon from "../../images/svg/expenses/alcohol.svg";
import entertainmentIcon from "../../images/svg/expenses/entertainment.svg";
import healthIcon from "../../images/svg/expenses/health.svg";
import transportIcon from "../../images/svg/expenses/transport.svg";
import housingIcon from "../../images/svg/expenses/housing.svg";
import techniqueIcon from "../../images/svg/expenses/technique.svg";
import communalIcon from "../../images/svg/expenses/communal.svg";
import hobbiesIcon from "../../images/svg/expenses/hobbies.svg";
import educationIcon from "../../images/svg/expenses/education.svg";
import otherIcon from "../../images/svg/expenses/other.svg";
import { StyledDiv } from "./ExpensesTypes.styled";

export const ExpensesTypes = () => {
  return (
    <StyledDiv>
      <div className="buttons-wrapper">
        <button type="button" className="arrow-btn">
          <img src={leftArrow} alt="arrow-left" />
        </button>
        <h2 className="expenses-title">EXPENSES</h2>
        <button type="button" className="arrow-btn">
          <img src={rightArrow} alt="arrow-right" />
        </button>
      </div>
      <ul className="expenses-list">
        <li>
          <Link>
            <p>5 000.00</p>
            <img src={productsIcon} alt="products" />
            <h3>Products</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>200.00</p>
            <img src={alcoholIcon} alt="alcohol" />
            <h3>Alcohol</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>800.00</p>
            <img src={entertainmentIcon} alt="entertainment" />
            <h3>Entertainment</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>900.00</p>
            <img src={healthIcon} alt="health" />
            <h3>Health</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>2 000.00</p>
            <img src={transportIcon} alt="transport" />
            <h3>Transport</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>1 500.00</p>
            <img src={housingIcon} alt="Housing" />
            <h3>Housing</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>800.00</p>
            <img src={techniqueIcon} alt="Technique" />
            <h3>Technique</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>2 200.00</p>
            <img src={communalIcon} alt="Communal" />
            <h3>Communal, communication</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>1 800.00</p>
            <img src={hobbiesIcon} alt="hobbies" />
            <h3>Sports, hobbies</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>2 400.00</p>
            <img src={educationIcon} alt="Education" />
            <h3>Education</h3>
          </Link>
        </li>
        <li>
          <Link>
            <p>3 000.00</p>
            <img src={otherIcon} alt="Other" />
            <h3>Other</h3>
          </Link>
        </li>
      </ul>
    </StyledDiv>
  );
};
