import { PublicApi } from "./http";

export const createUserService = (body) => {
  return PublicApi.post("/auth/register", body);
};
// export const loginGoogle = () => {
//   return PublicApi.get("/auth/register");
// };
