import { useState } from "react";
import { ReactComponent as Left } from "../../assets/images/svg/left.svg";
import { ReactComponent as Right } from "../../assets/images/svg/right.svg";
import { MonthPicker } from "./DatePickerStyled";

const SelDataPicker = () => {
  const date = new Date();
  const [monthNumber, setMonthNumber] = useState(date.getUTCMonth());
  const [year, setYear] = useState(date.getUTCFullYear());

  let monthLetter = "";
  let calcForYears = monthNumber;

  switch (monthNumber) {
    case 1:
      monthLetter = "January";
      break;
    case 2:
      monthLetter = "February";
      break;
    case 3:
      monthLetter = "March";
      break;
    case 4:
      monthLetter = "April";
      break;
    case 5:
      monthLetter = "May";
      break;
    case 6:
      monthLetter = "June";
      break;
    case 7:
      monthLetter = "July";
      break;
    case 8:
      monthLetter = "August";
      break;
    case 9:
      monthLetter = "September";
      break;
    case 10:
      monthLetter = "October";
      break;
    case 11:
      monthLetter = "November";
      break;
    case 12:
      monthLetter = "December";
      break;
  }

  const onLeft = () => {
    monthNumber <= 1 ? setMonthNumber(12) : setMonthNumber(monthNumber - 1);
    calcForYears -= 1;
    if (calcForYears <= 0) {
      setYear(year - 1);
    }
  };

  const onRight = () => {
    monthNumber >= 12 ? setMonthNumber(1) : setMonthNumber(monthNumber + 1);
    calcForYears += 1;
    if (calcForYears >= 13) {
      setYear(year + 1);
    }
  };

  return (
    <MonthPicker>
      <p>Current period:</p>
      <div>
        <Left onClick={onLeft} />
        <b>
          {monthLetter.toUpperCase()} {year}
        </b>
        <Right onClick={onRight} />
      </div>
    </MonthPicker>
  );
};

export default SelDataPicker;
