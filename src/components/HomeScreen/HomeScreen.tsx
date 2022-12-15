import {CameraIcon, ContactsIcon, HomeScreenWrapper, TimeSpan,} from './HomeScreen.styled';
import {useAppDispatch} from '../../redux/store';
import {setShowApp} from '../../redux/contacts/contactsSlice';

interface IHomeScreen {
    currentTime: string
}

export const HomeScreen = ({currentTime}: IHomeScreen) => {
    const dispatch = useAppDispatch()
    const showAppHandler = () => {
        dispatch(setShowApp())
    }
    return <HomeScreenWrapper>
        <TimeSpan>{currentTime}</TimeSpan>
        <CameraIcon/>
        <ContactsIcon onClick={showAppHandler}/>
    </HomeScreenWrapper>
}