import { RootState } from "../store";

export const selectTransactions = (state: RootState) =>
  state.transactions.transaction.incomes;
export const selectExpenseCategories = (state: RootState) =>
  state.transactions.transaction.expensesCategories;
export const selectTransactionsExpenses = (state: RootState) =>
  state.transactions.transaction.expenses;
export const selectTransactionsIncomes = (state: RootState) =>
  state.transactions.transaction.incomes;
export const selectMonthExpensesStats = (state: RootState) =>
  state.transactions.transaction.monthExpensesStats;
export const selectMonthIncomeStats = (state: RootState) =>
  state.transactions.transaction.monthIncomeStats;
export const selectIsLoadingTransaction = (state: RootState) =>
  state.transactions.isLoading;
export const selectError = (state: RootState) => state.transactions.error;
// export const selectTransactionFilter = (state: RootState) => state.transactions.filter;
