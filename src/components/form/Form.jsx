import Select from "./select/Select";
import { useState } from "react";
import Input from "./input/Input";
import {
  BlockButton,
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
        <BlockPicker>
          <DatePicker
            value={startDate}
            style={{
              backgroundColor: "aliceblue",
              height: "24px",
              width: "100px",
              borderColor: "transparent",
              fontSize: "14px",
              padding: "3px 10px",
            }}
            onChange={setStartDate}
          />
        </BlockPicker>
        <InputProduct placeholder="Product description" />
        <Select />
        <Input />
        <BlockButton>
          <ButtonInput>INPUT</ButtonInput>
          <ButtonClear>CLEAR</ButtonClear>
        </BlockButton>
      </FormGroup>
    </Box>
  );
};

export default Form;
