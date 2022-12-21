import calculator from "../../../images/svg/calculator.svg";
import { BlockNumberMobil, BlockNumber } from "./InputStyled";

const Input = () => {
  return (
    <>
      <BlockNumberMobil>
        <input type="number" placeholder="00.00 UAH" />
        <span>
          <img src={calculator} alt="calculator" />
        </span>
      </BlockNumberMobil>
      <BlockNumber>
        <input type="number" placeholder="0,00" />
        <img src={calculator} alt="calculator" />
      </BlockNumber>
    </>
  );
};

export default Input;
