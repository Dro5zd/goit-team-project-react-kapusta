import {CameraIcon, ContactsIcon, HomeScreenWrapper, TimeSpan,} from './HomeScreen.styled';
// import {useAppDispatch} from '../../redux/store';
// import {setShowApp} from '../../redux/contacts/contactsSlice';
import {NavLink} from 'react-router-dom';
import UpdateNotify from '../UpdateNotify/UpdateNotify';
import React from 'react';
import Delayed from '../Delayed/Delayed';

interface IHomeScreen {
    currentTime: string
}

export const HomeScreen = ({currentTime}: IHomeScreen) => {
    return <HomeScreenWrapper>
        <TimeSpan>{currentTime}</TimeSpan>
        <Delayed>
            <UpdateNotify/>
        </Delayed>
        <CameraIcon/>
        <NavLink to="/contacts">
            <ContactsIcon/>
        </NavLink>

    </HomeScreenWrapper>
}