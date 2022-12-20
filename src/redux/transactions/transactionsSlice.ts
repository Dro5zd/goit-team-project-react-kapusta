import {createSlice} from '@reduxjs/toolkit';
import {addContact, deleteContact, editContact, fetchContacts} from './transactions-operations';
import {Notify} from 'notiflix';

export interface ITransaction {
    id?: string,
    name: string,
    number: string
}

export interface IInitState {
    transactions: ITransaction[],
    filter: '',
    isLoading: boolean,
    error: string | null,
}

const transactionsInitialState: IInitState = {
    transactions: [],
    filter: '',
    isLoading: false,
    error: null,
};

const handlePending = (state: IInitState) => {
    state.isLoading = true;
};
const handleRejected = (state: IInitState, action: any) => {
    state.isLoading = false;
    Notify.failure(`Something went wrong`);
    state.error = action.payload;
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: transactionsInitialState,
    reducers: {
        filterTransaction(state, action){
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
                state.transactions = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.transactions.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.transactions.findIndex((d: ITransaction )=> d.id === action.payload.id)
                state.transactions.splice(index, 1);
            })
            .addCase(editContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.transactions.findIndex((d: ITransaction )=> d.id === action.payload.id)
                state.transactions.splice(index, 1, action.payload);
            })
    }
})
export const { filterTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer
