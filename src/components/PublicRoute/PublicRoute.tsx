import {useAppSelector} from '../../redux/store';
import {selectIsAuth} from '../../redux/auth/auth-selectors';
import {Navigate} from 'react-router-dom';
export default function PublicRoute({children}:any) {
    const isAuth = useAppSelector(selectIsAuth)
    return !isAuth ? children : <Navigate to="/contacts"/>
}
