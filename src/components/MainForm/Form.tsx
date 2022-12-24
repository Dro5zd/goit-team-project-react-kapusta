import Select from "./Select/Select";
import { useState } from "react";
import Input from "./Input/Input";
// import calendar from "../../assets/images/svg/calendar.svg";
import {
  BlockButton,
  BlockForm,
  BlockPicker,
  ButtonClear,
  ButtonInput,
  CalendarIcon,
  FormGroup,
  InputProduct,
} from "./Form.styled";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { useAppDispatch } from "../../redux/store";
import { addExpense } from "../../redux/transaction/transactions-operations";


const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectCategory, setSelectCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const dispatch = useAppDispatch();
  
  const handleChange = (e: any) => {
    const value = e.target.value;
    setAmount(+value);
  };
  if (startDate instanceof DateObject) {
    startDate.toDate();
    console.log("startDate", startDate?.format("YYYY-MM-DD"));
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let selectedDate = "";
    if (startDate instanceof DateObject) {
      selectedDate = startDate?.format("YYYY-MM-DD");
    }
    const form = event.target;
    // console.log("form.elements", form.elements, selectedDate);

    dispatch(
      addExpense({
        description: form.elements.description?.value,
        amount,
        date: selectedDate,
        category: selectCategory,
      })
    );
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
        <Select onSelectedCategory={onSelectedCategory} />
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
