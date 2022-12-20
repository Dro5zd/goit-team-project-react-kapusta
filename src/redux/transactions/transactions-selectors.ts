import {RootState} from '../store';

export const selectTransactions = (state: RootState) => state.transactions.transactions;
export const selectIsLoading = (state: RootState) => state.transactions.isLoading;
export const selectError = (state: RootState) => state.transactions.error;
export const selectTransactionFilter = (state: RootState) => state.transactions.filter;