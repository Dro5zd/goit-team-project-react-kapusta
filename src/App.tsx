import { useAppDispatch, useAppSelector } from "./redux/store";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Report from "./pages/Report";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { Loader } from "./components/Loader/Loader";
import { selectIsLoading } from "./redux/transaction/transactions-selectors";
import GlobalStyle from "./globalStyles";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import { refreshUser } from "./redux/auth/auth-operations";

export const App = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <GlobalStyle />
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />}>
              <Route path="expenses" element={<Expenses />} />
              <Route path="income" element={<Income />} />
            </Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/report"
              element={
                <PrivateRoute>
                  <Report />
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
