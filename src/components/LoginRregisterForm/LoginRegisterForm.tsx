import React, {ChangeEvent, FormEvent, useState} from 'react';
import {
    ContactFormButton,
    ContactFormLabel,
    ContactFormTitle,
    ContactFormWrapper,
    Input
} from '../ContactForm/ContactForm.styled';
import {useAppDispatch} from '../../redux/store';
import {createUser, loginUser} from '../../redux/auth/auth-operations';


const LoginRegisterForm = () => {
    const [isHidden, setIsHidden] = useState(true);
    const dispatch = useAppDispatch()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createUser({name, email, password}))
        resetForm()
    };
    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginUser({email, password}))
        resetForm()
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <h1>CONTAppCTS</h1>
            {isHidden ?
            <div>
                <ContactFormTitle>Login</ContactFormTitle>
                <ContactFormWrapper onSubmit={handleLoginSubmit}>
                    <ContactFormLabel>
                        <label className='auth-form__label' htmlFor='login_email'>E-mail</label>
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
                    <ContactFormLabel>
                        <label className='auth-form__label' htmlFor='login_password'>Password</label>
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
                <button className='login-form__button' onClick={()=> setIsHidden(!isHidden)}>
                    <span>Don't have an account? Sign up</span>
                </button>
            </div>
:
            <div>
                <ContactFormTitle>Register</ContactFormTitle>
                <ContactFormWrapper onSubmit={handleRegisterSubmit}>
                    <ContactFormLabel htmlFor='register_name'>Name
                        <Input
                            type='text'
                            name='name'
                            id='register_name'
                            placeholder='Your name'
                            autoFocus
                            min='3' max='25'
                            required
                            value={name}
                            onChange={handleNameChange}
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        />
                    </ContactFormLabel>
                    <ContactFormLabel htmlFor='register_email'>E-mail
                        <Input
                            type='email'
                            name='e-mail'
                            id='register_email'
                            placeholder='example@gmail.com'
                            required
                            value={email}
                            onChange={handleEmailChange}
                            title="Email must contain @ . For example example@gmail.com"
                        />
                    </ContactFormLabel>
                    <ContactFormLabel>
                        <label className='auth-form__label' htmlFor='register_password'>Password</label>
                        <Input
                            type='password'
                            name='password'
                            id='register_password'
                            min='7'
                            placeholder='Your password'
                            required
                            value={password}
                            onChange={handlePasswordChange}
                            title="The password must be more than 7 characters"
                        />
                    </ContactFormLabel>
                    <ContactFormButton type="submit">Register</ContactFormButton>
                </ContactFormWrapper>
                <button className='reg-form__button' onClick={()=> setIsHidden(!isHidden)}>
                    <span>Already have an account? Login here</span>
                </button>
            </div>}
        </>

    );
};

export default LoginRegisterForm;