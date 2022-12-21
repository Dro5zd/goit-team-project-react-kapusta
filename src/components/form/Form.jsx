import Select from "./select/Select";
import { useState } from "react";
import Input from "./input/Input";
import calendar from "../../images/svg/calendar.svg";
import {
  BlockButton,
  BlockForm,
  BlockPicker,
  Box,
  ButtonClear,
  ButtonInput,
  FormGroup,
  InputProduct,
} from "./FormStyled";
import DatePicker from "react-multi-date-picker";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box>
      <FormGroup>
        <BlockForm>
          <BlockPicker>
            <DatePicker
              value={startDate}
              format={" DD.MM.YYYY"}
              style={{
                backgroundColor: "transparent",
                height: "44px",
                width: "100px",
                borderColor: "transparent",
                fontSize: "14px",
                padding: "3px 10px",
              }}
              onChange={setStartDate}
            />
            <img src={calendar} alt="calendar" />
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
    </Box>
  );
};

export default Form;
