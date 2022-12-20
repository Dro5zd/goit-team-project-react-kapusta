import { createAsyncThunk } from "@reduxjs/toolkit";
import {ITransaction} from './transactionsSlice';
import {PrivateApi} from '../../http/http';

interface IEdit {
    contactId: string | undefined,
    name?: string,
    number?: string
}

export const fetchContacts = createAsyncThunk(
    "transactions/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await PrivateApi.get("/contacts");
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "transactions/addContact",
    async ({name, number}: ITransaction, thunkAPI) => {
        try {
            const response = await PrivateApi.post("/contacts", {name: name, number: number});
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const deleteContact = createAsyncThunk(
    "transactions/deleteContact",
    async (contactId:string, thunkAPI) => {
        try {
            const response = await PrivateApi.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const editContact = createAsyncThunk(
    "transactions/editContact",
    async ({contactId, name, number}: IEdit, thunkAPI) => {
        try {
            const response = await PrivateApi.patch(`/contacts/${contactId}`, {name: name, number: number});
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

