import React from 'react';
import {ContactsNotifIcon, UpdateNotifyDesc, UpdateNotifyWrapper} from './UpdateNotify.styled';


const UpdateNotify = () => {
    return (
        <UpdateNotifyWrapper>
            <ContactsNotifIcon/>
            <h5>Update ContAPPcts. Editing contacts.</h5>
            <UpdateNotifyDesc>Double-click on the contact that you want to edit in the list of contacts. Edit the
                contact information and then click outside the input field.</UpdateNotifyDesc>
        </UpdateNotifyWrapper>
    );
};
export default UpdateNotify;