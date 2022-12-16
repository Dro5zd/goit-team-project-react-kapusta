import {createSlice} from '@reduxjs/toolkit';
import {addContact, deleteContact, fetchContacts} from './contacts-operations';

export interface IContact {
    id?: string,
    name: string,
    number: string
}

export interface IInitState {
    contacts: IContact[],
    filter: '',
    isLoading: boolean,
    error: string | null,
}

const contactsInitialState: IInitState = {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
};

const handlePending = (state: IInitState) => {
    state.isLoading = true;
};
const handleRejected = (state: IInitState, action: any) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        filterContacts(state, action){
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(addContact.pending, handlePending)
            .addCase(deleteContact.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.contacts.findIndex((d: IContact )=> d.id === action.payload.id)
                state.contacts.splice(index, 1);
            })
            // .addCase(editContact.fulfilled, (state, action) => {
            //     state.isLoading = false;
            //     state.error = null;
            //     // const index = state.contacts.findIndex((d: IContact )=> d.id === action.payload.id)
            //     // state.contacts.splice(index, 1);
            // })
    }
})
export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer
