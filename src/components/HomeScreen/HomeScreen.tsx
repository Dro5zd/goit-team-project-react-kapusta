import {CameraIcon, ContactsIcon, HomeScreenWrapper, TimeSpan,} from './HomeScreen.styled';
// import {useAppDispatch} from '../../redux/store';
// import {setShowApp} from '../../redux/contacts/contactsSlice';
import {NavLink} from 'react-router-dom';

interface IHomeScreen {
    currentTime: string
}

export const HomeScreen = ({currentTime}: IHomeScreen) => {
    return <HomeScreenWrapper>
        <TimeSpan>{currentTime}</TimeSpan>
        <CameraIcon/>
        <NavLink to="/contacts">
            <ContactsIcon/>
        </NavLink>

    </HomeScreenWrapper>
}