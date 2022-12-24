import calculator from "../../../assets/images/svg/calculator.svg";
import {BlockNumber, BlockNumberMobil} from './Input.styled';


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
