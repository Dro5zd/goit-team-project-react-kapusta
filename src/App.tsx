import {IphoneWrapper} from './components/IphoneWrapper/IphoneWrapper';
import {HomeScreen} from './components/HomeScreen/HomeScreen';
import AppBody from './components/AppBody/AppBody';
import {useAppDispatch, useAppSelector} from './redux/store';
import {selectIsShowApp} from './redux/contacts/contacts-selectors';
import {useEffect} from 'react';
import {getUser} from './redux/auth/auth-operations';


export const App = () => {
    const showApp = useAppSelector(selectIsShowApp)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    const currentTime = () => {
        const options: {} = {hour: '2-digit', minute: '2-digit'};
        const today = new Date();
        return today.toLocaleString('ua-UA', options)
    }

    return (
        <IphoneWrapper currentTime={currentTime()}>
            {showApp
                ? <HomeScreen currentTime={currentTime()}/>
                : <AppBody/>
            }
        </IphoneWrapper>
    );
};
