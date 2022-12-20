import calculator from "../../../images/svg/calculator.svg";
import { BlockNumber } from "./InputStyled";

const Input = () => {
  return (
    <BlockNumber>
      <input type="number" placeholder="00.00 UAH" />
      <span>
        <img src={calculator} alt="calculator" />
      </span>
    </BlockNumber>
  );
};

export default Input;
