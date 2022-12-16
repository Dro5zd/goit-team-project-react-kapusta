import React from 'react';
import {useAppSelector} from '../../redux/store';
import {selectError, selectIsLoading} from '../../redux/contacts/contacts-selectors';
import {ContactsList} from '../ContactsList/ContactsList';
import {ContactForm} from '../ContactForm/ContactForm';
import UserMenu from '../UserMenu/UserMenu';

const AppBody = () => {

    const isLoading = useAppSelector(selectIsLoading)
    const error = useAppSelector(selectError)

    return (
                <>
                    <UserMenu/>
                    <ContactForm/>
                    {isLoading && !error && <b>Request in progress...</b>}
                    <ContactsList/>
                </>
    );
};

export default AppBody;