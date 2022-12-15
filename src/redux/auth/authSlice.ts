import {createSlice} from '@reduxjs/toolkit';
import {createUser, getUser, loginUser, logoutUser} from './auth-operations';

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
            .addCase(createUser.rejected, handleRejected)
            .addCase(createUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuth = true;
            })
            .addCase(loginUser.pending, handlePending)
            .addCase(loginUser.rejected, handleRejected)
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuth = true;
            })
            .addCase(logoutUser.pending, handlePending)
            .addCase(logoutUser.rejected, handleRejected)
            .addCase(logoutUser.fulfilled, (state) => {
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
