import Select from "./select/Select";
import {
  BlockButton,
  Box,
  ButtonClear,
  ButtonInput,
  FormGroup,
  InputProduct,
} from "./FormStyled";
import Input from "./input/Input";

const Form = () => {
  return (
    <Box>
      <FormGroup>
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
