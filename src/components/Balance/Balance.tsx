import {Link, useLocation} from 'react-router-dom';
import {
    BackIcon,
    BalanceBtn,
    BalanceContainer,
    BalanceForm,
    BalanceLabel,
    BalanceText,
    CalendarSvg,
    DateSpan,
    DoubleDots,
    InputButton,
    InputWrap,
} from './Balance.styled';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {BalanceNotification} from '../BalanceNotification/BalanceNotification';
import {selectBalance} from '../../redux/auth/auth-selectors';
import {useEffect, useState} from 'react';
import {setUserBalance} from '../../redux/auth/auth-operations';
import {Modal} from '../Modal/Modal';
import {ModalContent} from '../ModalContent/ModalContent';
import chart from '../../assets/images/svg/balance/bar-chart.svg';
import {ReactComponent as ArrowBack} from '../../assets/images/svg/balance/arrow-back.svg';
import DatePicker from 'react-multi-date-picker';

export const Balance = () => {
    const [startDate, setStartDate] = useState(new Date());
    const location = useLocation();
    const initBalance = useAppSelector(selectBalance);
    const dispatch = useAppDispatch();
    const [balance, setBalance] = useState(initBalance.toFixed(2));
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setBalance(initBalance.toFixed(2));
    }, [initBalance]);

    const handleChange = (e: any) => {
        const value = e.target.value;
        setBalance(value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        handleOpenModal();
    };

    const confirmHandler = (e: any) => {
        e.preventDefault();
        dispatch(setUserBalance(+balance));
        handleOpenModal();
    };

    return (
        <>
            <BalanceContainer>
                <BackIcon to="/" hidden={location.pathname !== '/report'}>
                    <ArrowBack/>
                    Main page
                </BackIcon>
                <Link to={'/report'} className="reports-link">
                    <span>Reports</span>
                    <img src={chart} alt="chart"/>
                </Link>
                <BalanceForm onSubmit={handleSubmit}>
                    <BalanceLabel htmlFor="balance">
                        Balance
                        <DoubleDots>:</DoubleDots>
                    </BalanceLabel>
                    <InputButton>
                        <InputWrap>
                            <BalanceText>UAH</BalanceText>
                            <input
                                type="number"
                                name="balance"
                                id="balance"
                                value={balance}
                                placeholder="00.00"
                                min="0.00"
                                onChange={handleChange}
                                pattern="^[0-9]*$"
                            />
                        </InputWrap>
                        {balance === '0.00' && <BalanceNotification/>}
                        <BalanceBtn type="submit">CONFIRM</BalanceBtn>
                    </InputButton>
                </BalanceForm>
                <DateSpan>
                    <CalendarSvg/>
                    <DatePicker
                        value={startDate}
                        format={' DD.MM.YYYY'}
                        style={{
                            backgroundColor: 'transparent',
                            height: '44px',
                            width: '100px',
                            borderColor: 'transparent',
                            padding: '3px 10px',
                            fontWeight: '900',
                            fontSize: '12px',
                            lineHeight: '14px',
                            color: ' #52555F',
                        }}
                        onChange={() => setStartDate}
                    />
                    {/* <RxCalendar size={20} />
          <span>21.11.2012</span> */}
                </DateSpan>
            </BalanceContainer>
            {isOpen && (
                <Modal onClose={handleOpenModal}>
                    <ModalContent
                        onClose={handleOpenModal}
                        // @ts-ignore
                        action={confirmHandler}
                        text="Are you sure?"
                        type="submit"
                    />
                </Modal>
            )}
        </>
    );
};






