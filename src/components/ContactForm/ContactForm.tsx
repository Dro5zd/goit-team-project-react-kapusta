import {
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
import {IContact} from '../../redux/contacts/contactsSlice';

export const ContactForm = () => {

    const dispatch = useAppDispatch()

    const contacts: IContact[] = useAppSelector(selectContacts)

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!contacts.map(contact => contact.name).includes(name)) {
            dispatch(addContact({name, number} ))
        } else alert(`${name} is already in contacts`);
        resetForm()
    };

    const resetForm = () => {
        setName('');
        setNumber('');
    };

    return (
        <div>
            <ContactFormTitle>Phonebook</ContactFormTitle>
            <ContactFormWrapper onSubmit={handleSubmit}>
                <ContactFormLabel>
                    <UserIcon top={'6px'}/>
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
                        value={number}
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
