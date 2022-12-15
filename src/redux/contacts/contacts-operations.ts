import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {IContact} from './contactsSlice';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async ({name, phoneNumber}: IContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", {name: name, number: phoneNumber});
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
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// export const filterContacts = createAsyncThunk(
//     "contacts/fetchAll",
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get("/contacts");
//             return response.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

