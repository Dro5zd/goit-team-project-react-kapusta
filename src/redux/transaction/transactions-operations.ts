import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi } from "../../http/http";
import { ITransaction } from "./transactionsSlice";

export const addIncome = createAsyncThunk(
  "transaction/addIncome",
  async ({ description, amount, date, category }: ITransaction, thunkAPI) => {
    try {
      const response = await PrivateApi.post("/transaction/income", {
        description,
        amount,
        date,
        category,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getIncome = createAsyncThunk(
  "transaction/getIncome",
  async (_, thunkAPI) => {
    try {
      const response = await PrivateApi.get("/transaction/income");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  "transaction/addExpense",
  async ({ description, amount, date, category }: ITransaction, thunkAPI) => {
    try {
      const response = await PrivateApi.post("/transaction/expense", {
        description,
        amount,
        date,
        category,
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getExpense = createAsyncThunk(
  "transaction/getExpense",
  async (_, thunkAPI) => {
    try {
      const response = await PrivateApi.get("/transaction/expense");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteIncomesTransaction = createAsyncThunk(
  "transaction/deleteIncomesTransaction",
  async (transactionId: string, thunkAPI) => {
    try {
      const response = await PrivateApi.delete(`/transaction/${transactionId}`);
      return { ...response.data, id: transactionId };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteExpenseTransaction = createAsyncThunk(
  "transaction/deleteExpenseTransaction",
  async (transactionId: string, thunkAPI) => {
    try {
      const response = await PrivateApi.delete(`/transaction/${transactionId}`);
      return { ...response.data, id: transactionId };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncomeCategories = createAsyncThunk(
  "transaction/getIncomeCategories",
  async (_, thunkAPI) => {
    try {
      const response = await PrivateApi.get("/transaction/income-categories");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getExpenseCategories = createAsyncThunk(
  "transaction/getExpenseCategories",
  async (_, thunkAPI) => {
    try {
      const response = await PrivateApi.get("/transaction/expense-categories");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTransPeriod = createAsyncThunk(
  "transaction/getTransPeriod",
  async (date: string, thunkAPI) => {
    try {
      const response = await PrivateApi.get("/transaction/period-data", {
        params: { date },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
