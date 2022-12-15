import {Filter} from '../Filter/Filter';
import {
    ContactsAvatar,
    ContactsButton,
    ContactsItem,
    ContactsListWrapper,
    ContactsSpan,
    ContactsSpanWrapper,
    ContactsTitle,
    ContactsUl,
    DeleteIcon
} from './ContactsList.styled';
import {Notification} from '../Notification/Notification';
import {MouseEvent, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {selectContactFilter, selectContacts} from '../../redux/contacts/contacts-selectors';
import {deleteContact, fetchContacts} from '../../redux/contacts/contacts-operations';
import {IContact} from '../../redux/contacts/contactsSlice';

export const ContactsList = () => {
    const contacts: IContact[] = useAppSelector(selectContacts)
    const filter = useAppSelector(selectContactFilter)
    const dispatch = useAppDispatch()

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(deleteContact(e.currentTarget.id))
    };
    const avatarCreator = (name: string) => {
        const nameSplit = name.split(' ');
        if (nameSplit.length > 1) {
            return nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
        } else {
            return nameSplit[0].charAt(0).toUpperCase();
        }
    };

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')}`;
    }

    return (
        <ContactsListWrapper>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter/>
            {contacts.length !== 0 ?
                <ContactsUl>
                    {contacts.filter(item => {
                        return item.name.toLowerCase().includes(filter);
                    })
                        .map(({id, name, phoneNumber}) => {
                            return <ContactsItem key={id}>
                                <ContactsAvatar
                                    style={{backgroundColor: getRandomHexColor()}}>{avatarCreator(name)}</ContactsAvatar>
                                <ContactsSpanWrapper>
                                    <ContactsSpan type={'name'}>{name}</ContactsSpan>
                                    <ContactsSpan type={'number'}>{phoneNumber}</ContactsSpan>
                                </ContactsSpanWrapper>
                                <ContactsButton id={id} onClick={deleteUser}><DeleteIcon/></ContactsButton>
                            </ContactsItem>;
                        })}
                </ContactsUl>
                : <Notification message="There is no contacts"/>}
        </ContactsListWrapper>
    )
        ;
}