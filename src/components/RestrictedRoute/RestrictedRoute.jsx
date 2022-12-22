import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/auth-selectors";
import { useAppSelector } from "../../redux/store";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ children, redirectTo = "/" }) => {
  const isAuth = useAppSelector(selectIsAuth);
  return isAuth ? <Navigate to={redirectTo} /> : children;
};
