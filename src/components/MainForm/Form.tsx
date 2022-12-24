import Select from './Select/Select';
import {useState} from 'react';
import Input from './Input/Input';
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
} from './Form.styled';
import DatePicker from 'react-multi-date-picker';

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <FormGroup>
            <BlockForm>
                <BlockPicker>
                    <CalendarIcon/>
                    <DatePicker
                        value={startDate}
                        format={' DD.MM.YYYY'}
                        style={{
                            backgroundColor: 'transparent',
                            height: '44px',
                            width: '100px',
                            border: 'none',
                            borderColor: 'transparent',
                            fontSize: '14px',
                            padding: '3px 10px',
                        }}
                        // @ts-ignore
                        onChange={setStartDate}
                    />
                    {/* <img src={calendar} alt="calendar" /> */}
                </BlockPicker>
                <InputProduct placeholder="Product description"/>
                <Select/>
                <Input/>
            </BlockForm>
            <BlockButton>
                <ButtonInput>INPUT</ButtonInput>
                <ButtonClear>CLEAR</ButtonClear>
            </BlockButton>
        </FormGroup>
    );
};

export default Form;
