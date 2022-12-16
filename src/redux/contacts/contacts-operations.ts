import { createAsyncThunk } from "@reduxjs/toolkit";
import {IContact} from './contactsSlice';
import {PrivateApi} from '../../http/http';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
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
    "contacts/addContact",
    async ({name, number}: IContact, thunkAPI) => {
        try {
            const response = await PrivateApi.post("/contacts", {name: name, number: number});
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
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
    "contacts/deleteContact",
    async (contactId:string, thunkAPI) => {
        try {
            const response = await PrivateApi.patch(`/contacts/${contactId}`);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

