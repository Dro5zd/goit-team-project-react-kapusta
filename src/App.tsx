import {IphoneWrapper} from './components/IphoneWrapper/IphoneWrapper';
import {useAppDispatch, useAppSelector} from './redux/store';
import {useEffect} from 'react';
import {getUser} from './redux/auth/auth-operations';
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound/NotFound';
import {Layout} from './components/Layout/Layout';
import {selectIsAuth} from './redux/auth/auth-selectors';
import PrivateRoute from './components/PrivateRout/PrivateRout';
import Contacts from './pages/Contacts';


export const App = () => {
    const dispatch = useAppDispatch()

    const isAuth = useAppSelector(selectIsAuth)

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
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={
                        !isAuth ? <Login/> : <Navigate to="/contacts"/>}/>
                    <Route path="/contacts" element={
                            <PrivateRoute>
                                <Contacts/>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </IphoneWrapper>
    );
};
