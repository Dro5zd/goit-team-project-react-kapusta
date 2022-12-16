import React, {ChangeEvent, FormEvent, useState} from 'react';
import {
    ContactFormButton,
    ContactFormLabel,
    ContactFormWrapper,
    Input
} from '../ContactForm/ContactForm.styled';
import {useAppDispatch} from '../../redux/store';
import {loginUser} from '../../redux/auth/auth-operations';
import {
    EmailIcon,
    FormButton,
    FormTitle,
    FormWrapper,
    KeyIcon, RegFormTitle,
    RegFormWrapper,
} from './LoginRegisterForm.styled';

const LoginForm = () => {
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser({email, password}))
        resetForm()
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };
    return (
        <FormWrapper>
            <FormTitle>CONTAppCTS</FormTitle>
            <RegFormWrapper>
                <RegFormTitle>Login</RegFormTitle>
                <ContactFormWrapper onSubmit={handleLoginSubmit}>
                    <ContactFormLabel>E-mail
                        <EmailIcon/>
                        <Input
                            type='email'
                            name='e-mail'
                            id='login_email'
                            placeholder='example@gmail.com'
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </ContactFormLabel>
                    <ContactFormLabel>Password
                        <KeyIcon/>
                        <Input
                            type='password'
                            name='password'
                            id='login_password'
                            min='7'
                            placeholder='Your password'
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            title="The password must be more than 7 characters"
                        />
                    </ContactFormLabel>
                    <ContactFormButton type="submit">Login</ContactFormButton>
                </ContactFormWrapper>
                <FormButton to="/register">
                    <span>Don't have an account? Sign up</span>
                </FormButton>
            </RegFormWrapper>
        </FormWrapper>

    );
};

export default LoginForm;