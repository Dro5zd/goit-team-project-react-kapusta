import Select from './Select/Select';
import {useState} from 'react';
import Input from './Input/Input';
// import calendar from "../../assets/images/svg/calendar.svg";
import {BlockButton, BlockForm, BlockPicker, CalendarIcon, FormGroup, InputProduct,} from './Form.styled';
import DatePicker, {DateObject} from 'react-multi-date-picker';
import {useAppDispatch} from '../../redux/store';
import {addExpense, addIncome, getExpense, getIncome} from '../../redux/transaction/transactions-operations';
import {ButtonClear, ButtonInput} from '../form/Form.styled';
import {ITransaction} from '../../redux/transaction/transactionsSlice';

interface ITFormProps {
    type: string
    onHandleSubmit: (data: ITransaction)=>void
}

const Form = ({type, onHandleSubmit}: ITFormProps) => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectCategory, setSelectCategory] = useState('');
    const [amount, setAmount] = useState(0);
    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
        const value = e.target.value;
        setAmount(+value);
    };
    if (startDate instanceof DateObject) {
        startDate.toDate();
        console.log('startDate', startDate?.format('YYYY-MM-DD'));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let selectedDate = '';
        if (startDate instanceof DateObject) {
            selectedDate = startDate?.format('YYYY-MM-DD');
        }
        const form = event.target;

        const data = {
            description: form.elements.description?.value,
            amount,
            date: selectedDate,
            category: selectCategory,
        }
        onHandleSubmit(data)
        // console.log("form.elements", form.elements, selectedDate);
        // if (type === 'income') {
        //     dispatch(
        //         addIncome(data)
        //     );
        //     dispatch(
        //         getIncome()
        //     );
        // }
        // if (type === 'expense') {
        //     dispatch(
        //         addExpense(data)
        //     );
        //     dispatch(
        //         getExpense()
        //     );
        // }
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
                    <CalendarIcon/>
                    <DatePicker
                        value={startDate}
                        format={'DD.MM.YYYY'}
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
                <InputProduct
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Product description"
                    min="0.00"
                />
                <Select type={type} onSelectedCategory={onSelectedCategory}/>
                <Input handleChange={handleChange}/>
            </BlockForm>
            <BlockButton>
                <ButtonInput type="submit">INPUT</ButtonInput>
                <ButtonClear>CLEAR</ButtonClear>
            </BlockButton>
        </FormGroup>
    );
};

export default Form;
