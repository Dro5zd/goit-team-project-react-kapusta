import React from 'react';
import {NotFoundDesc, NotFoundLogo, NotFoundTitle, NotFoundWrapper} from './NotFound.styled';
import {Link} from 'react-router-dom';


const NotFound = () => {
    return (
        <NotFoundWrapper>
            <NotFoundLogo>Kapu$ta</NotFoundLogo>
            <NotFoundTitle>Lost your way?</NotFoundTitle>
            <NotFoundDesc>Sorry, we couldn't find this page you were looking for. To return to the homepage click on the
                button bellow.</NotFoundDesc>
            <Link to="/">
                <span>Home page</span>
            </Link>
        </NotFoundWrapper>
    );
};

export default NotFound