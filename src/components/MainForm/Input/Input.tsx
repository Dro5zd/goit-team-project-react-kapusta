import calculator from "../../../assets/images/svg/calculator.svg";
import { BlockNumber, BlockNumberMobil } from "./Input.styled";

const Input = ({ handleChange }: any) => {
  return (
    <>
      <BlockNumberMobil>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          placeholder="00.00 UAH"
        />
        <span>
          <img src={calculator} alt="calculator" />
        </span>
      </BlockNumberMobil>
      <BlockNumber>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          placeholder="0,00"
        />
        <img src={calculator} alt="calculator" />
      </BlockNumber>
    </>
  );
};

export default Input;
