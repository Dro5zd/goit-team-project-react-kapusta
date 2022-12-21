import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {transactionsReducer} from './transaction/transactionsSlice';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import storage from 'redux-persist/lib/storage';
import {authReducer} from './auth/authSlice';

const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const persistedAuthReducer = persistReducer(authConfig, authReducer)

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    transactions: transactionsReducer,
    // user: userReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector