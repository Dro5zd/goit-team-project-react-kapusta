import { createAsyncThunk } from "@reduxjs/toolkit";
import { PrivateApi, PublicApi, token } from "../../http/http";
import { IValues } from "../../components/RegisterForm/RegisterForm";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: IValues, thunkAPI) => {
    try {
      const res = await PublicApi.post("/auth/login", {
        email: email,
        password: password,
      });
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
      const res = await PublicApi.get("/auth/google", {
        headers: {
          accept: "*/*",
        },
      });
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
  // console.log("getUser");

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
      const res = await PrivateApi.patch("/user/balance", {
        newBalance: balance,
      });
      token.unset();
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
