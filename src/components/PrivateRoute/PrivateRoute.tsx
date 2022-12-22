import { useAppSelector } from "../../redux/store";
import { selectIsAuth, selectIsLoading } from "../../redux/auth/auth-selectors";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ children }: any) {
  const isAuth = useAppSelector(selectIsAuth);
  const isLoading = useAppSelector(selectIsLoading);
  const shouldRedirect = !isLoading && !isAuth;
  return shouldRedirect ? <Navigate to="/login" /> : children;
}
