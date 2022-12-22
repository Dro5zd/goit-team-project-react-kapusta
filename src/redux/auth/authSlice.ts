import { createSlice } from "@reduxjs/toolkit";
import { getUser, loginUser, logoutUser } from "./auth-operations";
import { Notify } from "notiflix";

export interface ITransaction {
  description: string;
  category: string;
  amount: number;
  date: string;
  _id: string;
}

export interface IUser {
  id: string | null;
  email: string | null;
  password?: string | null;
  balance: number;
}

export interface IInitState {
  user: IUser;
  sid: string;
  token: string | null;
  isAuth: boolean;
  isLoading: boolean;
  error: null;
}

const authInitialState: IInitState = {
  user: {
    email: "",
    balance: 0,
    id: "",
  },
  sid: "",
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

const handlePending = (state: IInitState) => {
  state.isLoading = true;
};
const handleRejected = (state: IInitState, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.rejected, (state: IInitState, action: any) => {
        state.isLoading = false;
        Notify.failure(`Wrong email or password`);
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("logg", state, action);
        state.isLoading = false;
        state.user.email = action.payload.userData.email;
        state.user.balance = action.payload.userData.balance;
        state.user.id = action.payload.userData.id;
        state.sid = action.payload.sid;
        state.token = action.payload.accessToken;
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

      .addCase(getUser.pending, handlePending)
      .addCase(getUser.rejected, handleRejected)
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      });
  },
});
export const authReducer = authSlice.reducer;
