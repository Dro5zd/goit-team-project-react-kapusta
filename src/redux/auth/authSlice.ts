import {createSlice} from '@reduxjs/toolkit';
import {createUser, getUser, loginUser, logoutUser} from './auth-operations';
import {Notify} from 'notiflix';

export interface IUser {
    name?: string | null,
    email: string | null,
    password?: string | null
}

export interface IInitState {
    user: IUser,
    token: string | null,
    isAuth: boolean,
    isLoading: boolean,
    error: null
}

const authInitialState: IInitState = {
    user: {name: null, email: null},
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
            .addCase(createUser.pending, handlePending)
            .addCase(createUser.rejected, (state: IInitState, action: any) => {
                state.isLoading = false;
                Notify.failure(`User with this email already exists`);
                state.error = action.payload;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                Notify.success(`Welcome, ${state.user.name}`);
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
                Notify.success(`Welcome back, ${state.user.name}`);
                state.isAuth = true;
            })
            .addCase(logoutUser.pending, handlePending)
            .addCase(logoutUser.rejected, handleRejected)
            .addCase(logoutUser.fulfilled, (state) => {
                Notify.success(`See ya, ${state.user.name}`);
                state.user = {name: null, email: null};
                state.token = null;
                state.isAuth = false;
            })
            .addCase(getUser.pending, handlePending)
            .addCase(getUser.rejected, handleRejected)
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuth = true;
            })
    }
})
export const authReducer = authSlice.reducer
