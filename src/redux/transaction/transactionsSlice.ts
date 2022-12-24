import { createSlice } from "@reduxjs/toolkit";
import {
  addExpense,
  addIncome,
  deleteTransaction,
  getExpense,
  getIncome,
} from "./transactions-operations";
import { Notify } from "notiflix";
import { loginUser } from "../auth/auth-operations";

export interface ITransaction {
  description: string;
  amount: number;
  date: string;
  category: string;
  _id?: string;
}

interface ITransactionsInitState {
  transaction: {
    incomes: ITransaction[];
    expenses: ITransaction[];
    monthStats: {
      [id: string]: string | number;
    };
  };
  isLoading: boolean;
  error: string | null;
}

const transactionInitialState: ITransactionsInitState = {
  transaction: {
    incomes: [
      {
        description: "Income description",
        amount: 100,
        date: "2020-12-31",
        category: "Доход",
        _id: "507f1f77bcf86cd799439011",
      },
    ],
    expenses: [
      {
        description: "Income description",
        amount: 100,
        date: "2020-12-31",
        category: "Доход",
        _id: "507f1f77bcf86cd799439011",
      },
    ],
    monthStats: {
      Январь: 5,
      Февраль: 100,
      Март: "N/A",
      Апрель: "N/A",
      Май: 1,
      Июнь: "N/A",
      Июль: 3,
      Август: "N/A",
      Сентябрь: "N/A",
      Октябрь: 77,
      Ноябрь: "N/A",
      Декабрь: 123,
    },
  },
  isLoading: false,
  error: null,
};

const handlePending = (state: ITransactionsInitState) => {
  state.isLoading = true;
};
const handleRejected = (state: ITransactionsInitState, action: any) => {
  state.isLoading = false;
  Notify.failure(`Something went wrong`);
  state.error = action.payload;
};

const transactionsSlice = createSlice({
  name: "transaction",
  initialState: transactionInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIncome.pending, handlePending)
      .addCase(addIncome.pending, handlePending)
      .addCase(addExpense.pending, handlePending)
      .addCase(getExpense.pending, handlePending)
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(getIncome.rejected, handleRejected)
      .addCase(addIncome.rejected, handleRejected)
      .addCase(addExpense.rejected, handleRejected)
      .addCase(getExpense.rejected, handleRejected)
      .addCase(deleteTransaction.rejected, handleRejected)
      .addCase(getIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transaction.incomes = action.payload;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transaction.incomes.push(action.payload);
      })
      .addCase(getExpense.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transaction.expenses = action.payload.expenses;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transaction.expenses.push(action.payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transaction.incomes.findIndex(
          (d: ITransaction) => d._id === action.payload.id
        );
        state.transaction.incomes.splice(index, 1);
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.transaction = action.payload.userData.transactions;
      });
  },
});
// export const { filterTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
