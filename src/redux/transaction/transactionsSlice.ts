import { createSlice } from "@reduxjs/toolkit";
import {
  addExpense,
  addIncome,
  deleteExpenseTransaction,
  deleteIncomesTransaction,
  getExpense,
  getExpenseCategories,
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
    monthExpensesStats: {
      [id: string]: string | number;
    };
    monthIncomeStats: {
      [id: string]: string | number;
    };
    expensesCategories: string[];
    incomeCategories: string[];
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
    monthExpensesStats: {
      Январь: "N/A",
      Февраль: "N/A",
      Март: "N/A",
      Апрель: "N/A",
      Май: "N/A",
      Июнь: "N/A",
      Июль: "N/A",
      Август: "N/A",
      Сентябрь: "N/A",
      Октябрь: "N/A",
      Ноябрь: "N/A",
      Декабрь: "N/A",
    },
    monthIncomeStats: {
      Январь: "N/A",
      Февраль: "N/A",
      Март: "N/A",
      Апрель: "N/A",
      Май: "N/A",
      Июнь: "N/A",
      Июль: "N/A",
      Август: "N/A",
      Сентябрь: "N/A",
      Октябрь: "N/A",
      Ноябрь: "N/A",
      Декабрь: "N/A",
    },
    expensesCategories: [],
    incomeCategories: [],
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
      .addCase(deleteIncomesTransaction.pending, handlePending)
      .addCase(deleteExpenseTransaction.pending, handlePending)
      .addCase(getIncome.rejected, handleRejected)
      .addCase(addIncome.rejected, handleRejected)
      .addCase(addExpense.rejected, handleRejected)
      .addCase(getExpense.rejected, handleRejected)
      .addCase(deleteIncomesTransaction.rejected, handleRejected)
      .addCase(deleteExpenseTransaction.rejected, handleRejected)
      .addCase(getIncome.fulfilled, (state: ITransactionsInitState, action) => {
        state.isLoading = false;
        state.error = null;
        state.transaction.incomes = action.payload.incomes;
        state.transaction.monthIncomeStats = action.payload.monthsStats;
      })
      .addCase(addIncome.fulfilled, (state: ITransactionsInitState, action) => {
        state.isLoading = false;
        state.error = null;
        state.transaction.incomes.push(action.payload.transaction);
      })

      .addCase(
        getExpense.fulfilled,
        (state: ITransactionsInitState, action) => {
          state.isLoading = false;
          state.error = null;
          console.log("getExpens", action.payload.expenses);

          state.transaction.expenses = action.payload.expenses;
          state.transaction.monthExpensesStats = action.payload.monthsStats;
        }
      )
      .addCase(
        getExpenseCategories.fulfilled,
        (state: ITransactionsInitState, action) => {
          state.isLoading = false;
          state.error = null;
          state.transaction.expensesCategories = action.payload;
        }
      )
      .addCase(
        addExpense.fulfilled,
        (state: ITransactionsInitState, action) => {
          state.isLoading = false;
          state.error = null;
          state.transaction.expenses.push(action.payload.transaction);
        }
      )
      .addCase(deleteIncomesTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transaction.incomes.findIndex(
          (d: ITransaction) => d._id === action.payload.id
        );
        Notify.success(`Success`);
        state.transaction.incomes.splice(index, 1);
      })

      .addCase(deleteExpenseTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.transaction.expenses.findIndex(
          (d: ITransaction) => d._id === action.payload.id
        );
        Notify.success(`Success`);
        console.log("index", index);

        state.transaction.expenses.splice(index, 1);
      })

      .addCase(loginUser.fulfilled, (state: ITransactionsInitState, action) => {
        state.transaction = action.payload.userData.transactions;
      });
  },
});
// export const { filterTransaction } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
