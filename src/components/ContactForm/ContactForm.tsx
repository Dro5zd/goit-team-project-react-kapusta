import {
    BackIcon,
    ContactFormButton,
    ContactFormLabel,
    ContactFormTitle,
    ContactFormWrapper,
    Input,
    PhoneIcon,
    UserIcon
} from './ContactForm.styled';
import {ChangeEvent, FormEvent, useState} from 'react';
import {addContact} from '../../redux/contacts/contacts-operations';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {selectContacts} from '../../redux/contacts/contacts-selectors';
import {IContact, setShowApp} from '../../redux/contacts/contactsSlice';

export const ContactForm = () => {

    const dispatch = useAppDispatch()

    const contacts: IContact[] = useAppSelector(selectContacts)
    const showAppHandler = () => {
        dispatch(setShowApp())
    }

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const addContactHandler = (name: string, phoneNumber: string) => {
        if (!contacts.map(contact => contact.name).includes(name)) {
            dispatch(addContact({name, phoneNumber} ))
        } else alert(`${name} is already in contacts`);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addContactHandler(name, phoneNumber);
        resetForm()
    };

    const resetForm = () => {
        setName('');
        setPhoneNumber('');
    };

    return (
        <div>
            <BackIcon onClick={showAppHandler}/>
            <ContactFormTitle>Phonebook</ContactFormTitle>
            <ContactFormWrapper onSubmit={handleSubmit}>
                <ContactFormLabel>
                    <UserIcon/>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={handleNameChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </ContactFormLabel>
                <ContactFormLabel>
                    <PhoneIcon/>
                    <Input
                        type="tel"
                        name="number"
                        value={phoneNumber}
                        placeholder="Number"
                        onChange={handleNumberChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </ContactFormLabel>
                <ContactFormButton type="submit">Add contact</ContactFormButton>
            </ContactFormWrapper>
        </div>
    );
};
