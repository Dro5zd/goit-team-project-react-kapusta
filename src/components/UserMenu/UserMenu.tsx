import React from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {selectUsername} from '../../redux/auth/auth-selectors';
import {logoutUser} from '../../redux/auth/auth-operations';
import {BackIcon, ExitIcon, UserMenuTitle, UserMenuWrapper} from './UserMenu.styled';
import {setShowApp} from '../../redux/contacts/contactsSlice';

const UserMenu = () => {
    const userName = useAppSelector(selectUsername)
    const dispatch = useAppDispatch()
    const logOutHandler = () => {
        dispatch(logoutUser())
    }
    const showAppHandler = () => {
        dispatch(setShowApp())
    }

    return (
        <UserMenuWrapper>
            <BackIcon onClick={showAppHandler}/>
            <UserMenuTitle>{userName}</UserMenuTitle>
            <ExitIcon onClick={logOutHandler}>Logout</ExitIcon>
        </UserMenuWrapper>
    );
};

export default UserMenu;