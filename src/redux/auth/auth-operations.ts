import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./authSlice";
import { PrivateApi, PublicApi, token } from "../../http/http";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: IUser, thunkAPI) => {
    try {
      const res = await PublicApi.post("/auth/login", {
        email: email,
        password: password,
      });
      console.log("Operat login", res.data);
      token.set(res.data.accessToken);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginGoogle = createAsyncThunk(
  "auth/loginGoogle",
  async (_, thunkAPI) => {
    try {
      console.log("THunk goo");

      const res = await PublicApi.get("/auth/google", {
        headers: {
          accept: "*/*",
        },
      });
      console.log("Operat google", res.data);
      token.set(res.data.accessToken);
      getUser();
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const res = await PrivateApi.post("/auth/logout");
      token.unset();
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  const { auth }: any = thunkAPI.getState();
  const persistedToken = auth.token;
  const persistedIsAuth = auth.isAuth;
  // @ts-ignore
  if (persistedToken === null || persistedIsAuth) {
    return thunkAPI.rejectWithValue("");
  }
  token.set(persistedToken);
  try {
    const res = await PrivateApi.get("/user");
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const setUserBalance = createAsyncThunk(
    "auth/setUserBalance",
    async (balance: number, thunkAPI) => {
        try {
          const res = await PrivateApi.patch("/user/balance", {newBalance: balance});
          token.unset();
          return res.data;
        } catch (error: any) {
          return thunkAPI.rejectWithValue(error.message);
        }
});
