import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "./authSlice";
import { PrivateApi, PublicApi, token } from "../../http/http";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }: IUser, thunkAPI) => {
    try {
      const res = await PublicApi.post("/auth/register", {
        email: email,
        password: password,
      });

      console.log("Operat register", res.data);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
// export const getUser = createAsyncThunk(
//     "auth/getUser",
//     async (_, thunkAPI) => {
//         const state = thunkAPI.getState()
//         // @ts-ignore
//         const persistedToken = state.auth.token
//         if(persistedToken === null){
//             return thunkAPI.rejectWithValue('')
//         }
//             token.set(persistedToken)
//         try {
//             const res = await PrivateApi.get("/users/current");
//             return res.data;
//         } catch (error: any) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const { auth }: any = thunkAPI.getState();
    const persistedToken = auth.token;
    console.log(thunkAPI.getState(), persistedToken);

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(persistedToken);
      const res = await PrivateApi.post("/auth/refresh");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);
