import {RootState} from '../store';

export const selectTransactions = (state: RootState) => state.transactions.transaction.incomes;
export const selectError = (state: RootState) => state.transactions.error;
// export const selectTransactionFilter = (state: RootState) => state.transactions.filter;