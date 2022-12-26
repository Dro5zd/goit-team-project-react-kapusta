import Select from "./Select/Select";
import { useState } from "react";
import Input from "./Input/Input";
// import calendar from "../../assets/images/svg/calendar.svg";
import {
  BlockButton,
  BlockForm,
  BlockPicker, ButtonClear, ButtonInput,
  CalendarIcon,
  FormGroup,
  InputProduct,
} from './Form.styled';
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useAppDispatch } from "../../redux/store";
import {
  addExpense,
  addIncome,
  getExpense,
  getIncome,
} from "../../redux/transaction/transactions-operations";

import { ITransaction } from "../../redux/transaction/transactionsSlice";

interface ITFormProps {
  type: string;
  onHandleSubmit: (data: ITransaction) => void;
}

const transformDate = (date: any) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = yyyy + "-" + mm + "-" + dd;
  return formattedToday;
};

const Form = ({ type, onHandleSubmit }: ITFormProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectCategory, setSelectCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();
const [selectDefault, setSelectDefault] = useState('')
  

  const handleChange = (e: any) => {
    const value = e.target.value;
    setAmount(+value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setSelectDefault("Product category") ;
    let selectedDate = "";
    if (startDate instanceof DateObject) {
      selectedDate = startDate?.format("YYYY-MM-DD");
    } else {
      selectedDate = transformDate(startDate);
    }
    const form = event.target;

    const data = {
      description: form.elements.description?.value,
      amount,
      date: selectedDate,
      category: selectCategory,
    };
    onHandleSubmit(data);
    form.reset();
    //   handleOpenModal();
  };

  const onSelectedCategory = (val: string) => {
    setSelectCategory(val);
  };

  return (
    <FormGroup onSubmit={handleSubmit}>
      <BlockForm>
        <BlockPicker>
          <CalendarIcon />
          <DatePicker
            value={startDate}
            format={"DD.MM.YYYY"}
            style={{
              backgroundColor: "transparent",
              height: "44px",
              width: "100px",
              border: "none",
              borderColor: "transparent",
              fontSize: "14px",
              padding: "3px 10px",
            }}
            // @ts-ignore
            onChange={setStartDate}
          />
          {/* <img src={calendar} alt="calendar" /> */}
        </BlockPicker>
        <InputProduct
          type="text"
          name="description"
          id="description"
          placeholder="Product description"
          min="0.00"
        />
        <Select type={type} onSelectedCategory={onSelectedCategory} selectDefault={selectDefault} onSelect={setSelectDefault } />
        <Input handleChange={handleChange} />
      </BlockForm>
      <BlockButton>
        <ButtonInput type="submit">INPUT</ButtonInput>
        <ButtonClear>CLEAR</ButtonClear>
      </BlockButton>
    </FormGroup>
  );
};

export default Form;
