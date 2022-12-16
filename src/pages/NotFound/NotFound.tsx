import React from 'react';

import {NotFoundDesc, NotFoundLogo, NotFoundTitle, NotFoundWrapper} from './NotFound.styled';
import {FormButton} from '../../components/LoginForm/LoginRegisterForm.styled';

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <NotFoundLogo>CONTAppCTS</NotFoundLogo>
            <NotFoundTitle>Lost your way?</NotFoundTitle>
            <NotFoundDesc>Sorry, we couldn't find this page you were looking for. To return to the homepage click on the
                button bellow.</NotFoundDesc>
            <FormButton to="/">
                <span>Home page</span>
            </FormButton>
        </NotFoundWrapper>
    );
};

export default NotFound