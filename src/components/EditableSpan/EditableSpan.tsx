import React, {ChangeEvent, useState} from 'react';
// import {useAppDispatch} from '../../redux/store';
// import {editContact} from '../../redux/transaction/transactions-operations';

type EditableSpanPropsType = {
    id: string | undefined
    type: string
    value: string
}

export function EditableSpan({id, type, value}: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [editValue, setEditValue] = useState(value);

    // const dispatch = useAppDispatch()

    const activateEditMode = () => {
        setEditMode(true);
        setEditValue(value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        // dispatch(editContact({contactId: id, [`${type}`]: editValue}));
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setEditValue(e.currentTarget.value)
    }

    return editMode
        ?    <input id={id} name={type} value={editValue} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        : <span
            // type={type}
            onDoubleClick={activateEditMode}>{value}</span>
}
