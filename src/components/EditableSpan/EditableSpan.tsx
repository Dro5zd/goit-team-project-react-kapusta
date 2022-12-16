import React, {ChangeEvent, useState} from 'react';
import {ContactsSpan} from '../ContactsList/ContactsList.styled';
// import {useAppDispatch} from '../../redux/store';
// import {editContact} from '../../redux/contacts/contacts-operations';

type EditableSpanPropsType = {
    type: string
    value: string
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    // const dispatch = useAppDispatch()

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        // dispatch(editContact(title))
        // props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?    <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <ContactsSpan type={props.type} onDoubleClick={activateEditMode}>{props.value}</ContactsSpan>
}
