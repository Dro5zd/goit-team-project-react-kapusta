import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import { useAppSelector } from "../../redux/store";

export const PublicRoute = ({ children, redirectTo = "/" }: any) => {
  const isAuth = useAppSelector(selectIsAuth);
  return isAuth ? <Navigate to={redirectTo} /> : children;
};
