import {IphoneWrapper} from './components/IphoneWrapper/IphoneWrapper';
import {useAppDispatch} from './redux/store';
import {useEffect} from 'react';
import {getUser} from './redux/auth/auth-operations';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound/NotFound';
import {Layout} from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contacts from './pages/Contacts';
import PublicRoute from './components/PublicRoute/PublicRoute';


export const App = () => {
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
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/login" element={
                            <PublicRoute>
                                <Login/>
                            </PublicRoute>
                        }
                    />
                    <Route path="/register" element={
                            <PublicRoute>
                                <Register/>
                            </PublicRoute>
                        }
                    />
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
