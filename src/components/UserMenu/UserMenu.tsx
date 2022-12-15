import React from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {selectUsername} from '../../redux/auth/auth-selectors';
import {logoutUser} from '../../redux/auth/auth-operations';

const UserMenu = () => {
    const userName = useAppSelector(selectUsername)
    const dispatch = useAppDispatch()
    const logOutHandler = () => {
        dispatch(logoutUser())
    }

    return (
        <div>
            <p>{userName}</p>
            <button onClick={logOutHandler}>Logout</button>
        </div>
    );
};

export default UserMenu;