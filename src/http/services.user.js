import { loginUser } from "../redux/auth/auth-operations";
import { useAppDispatch } from "../redux/store";
import { PublicApi, PrivateApi, token } from "./http";

export const createUserService = (body) => {
  return PublicApi.post("/auth/register", body);
};

export const getReportsByPeriod = async (date = "2022-12") => {
  // return PrivateApi.get(`/transaction/period-data?date=${date}`);
  const { data } = await PrivateApi.get(
    `/transaction/period-data?date=${date}`
  );
  return data;
};

export const changeAccessToken = async (accessToken) => {
  // const dispatch = useAppDispatch();

  const data = await token.set(accessToken);
  // await dispatch(addToken(accessToken));
  // await dispatch(loginUser());
  // const { data } = await fetchApi.get(`movie/${movie_id}?api_key=${key}`);
  return data;
};
