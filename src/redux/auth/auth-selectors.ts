import { RootState } from "../store";
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectUsername = (state: RootState) => state.auth.user.email;
// export const selectSid = (state: RootState) => state.auth.sid;
