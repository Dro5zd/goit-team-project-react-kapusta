import React from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {selectUsername} from '../../redux/auth/auth-selectors';
import {logoutUser} from '../../redux/auth/auth-operations';
import {BackIcon, BackIconLink, ExitIcon, UserMenuTitle, UserMenuWrapper} from './UserMenu.styled';

const UserMenu = () => {
    const userName = useAppSelector(selectUsername)
    const dispatch = useAppDispatch()
    const logOutHandler = () => {
        dispatch(logoutUser())
    }

    return (
        <UserMenuWrapper>
            <BackIconLink to="/"><BackIcon /></BackIconLink>
            <UserMenuTitle>{userName}</UserMenuTitle>
            <ExitIcon onClick={logOutHandler}>Logout</ExitIcon>
        </UserMenuWrapper>
    );
};

export default UserMenu;