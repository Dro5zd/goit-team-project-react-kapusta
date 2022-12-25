import { PublicApi, PrivateApi } from "./http";

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

// export const getFullInfoAboutMovie = async (movie_id) => {
//   const { data } = await fetchApi.get(`movie/${movie_id}?api_key=${key}`);
//   return data;
// };
