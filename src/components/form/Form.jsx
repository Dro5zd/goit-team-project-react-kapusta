import Select from "./select/Select";
import { useState } from "react";
import Input from "./input/Input";
// import calendar from "../../assets/images/svg/calendar.svg";
import {
  BlockButton,
  BlockForm,
  BlockPicker,
  ButtonClear,
  ButtonInput,
  FormGroup,
  InputProduct,
  CalendarIcon,
} from "./Form.styled";
import DatePicker from "react-multi-date-picker";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <FormGroup>
      <BlockForm>
        <BlockPicker>
          <CalendarIcon />
          <DatePicker
            value={startDate}
            format={" DD.MM.YYYY"}
            style={{
              backgroundColor: "transparent",
              height: "44px",
              width: "100px",
              border: "none",
              borderColor: "transparent",
              fontSize: "14px",
              padding: "3px 10px",
            }}
            onChange={setStartDate}
          />
          {/* <img src={calendar} alt="calendar" /> */}
        </BlockPicker>
        <InputProduct placeholder="Product description" />
        <Select />
        <Input />
      </BlockForm>
      <BlockButton>
        <ButtonInput>INPUT</ButtonInput>
        <ButtonClear>CLEAR</ButtonClear>
      </BlockButton>
    </FormGroup>
  );
};

export default Form;
