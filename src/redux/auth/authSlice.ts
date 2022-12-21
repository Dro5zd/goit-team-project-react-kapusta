import {createSlice} from '@reduxjs/toolkit';
import {loginUser, logoutUser, registerUser} from './auth-operations';
import {Notify} from 'notiflix';

export interface ITransaction {
    description: string,
    category: string,
    amount: number,
    date: string,
    _id: string
}

export interface IUser {
    id: string | null,
    email: string | null,
    password?: string | null
    balance: number,
    transactions: ITransaction[]
}

export interface IInitState {
    user: IUser,
    token: string | null,
    isAuth: boolean,
    isLoading: boolean,
    error: null
}

const authInitialState: IInitState = {
    user: {
        email: '',
        balance: 0,
        id: '',
        transactions: [
            {
                description: '',
                category: '',
                amount: 0,
                date: '',
                _id: ''
            }
        ]
    },
    token: null,
    isAuth: false,
    isLoading: false,
    error: null
};

const handlePending = (state: IInitState) => {
    state.isLoading = true;
};
const handleRejected = (state: IInitState, action: any) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, handlePending)
            .addCase(registerUser.rejected, (state: IInitState, action: any) => {
                state.isLoading = false;
                Notify.failure(`User with this email already exists`);
                state.error = action.payload;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                Notify.success(`Welcome, ${state.user.email}`);
                state.isAuth = true;
            })
            .addCase(loginUser.pending, handlePending)
            .addCase(loginUser.rejected, (state: IInitState, action: any) => {
                state.isLoading = false;
                Notify.failure(`Wrong email or password`);
                state.error = action.payload;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                Notify.success(`Welcome back, ${state.user.email}`);
                state.isAuth = true;
            })
            .addCase(logoutUser.pending, handlePending)
            .addCase(logoutUser.rejected, handleRejected)
            .addCase(logoutUser.fulfilled, (state) => {
                Notify.success(`See ya, ${state.user.email}`);
                state.user = authInitialState.user;
                state.token = null;
                state.isAuth = false;
            })
            // .addCase(getUser.pending, handlePending)
            // .addCase(getUser.rejected, handleRejected)
            // .addCase(getUser.fulfilled, (state, action) => {
            //     state.user = action.payload;
            //     state.isAuth = true;
            // })
    }
})
export const authReducer = authSlice.reducer
