import { useAppDispatch, useAppSelector } from "./redux/store";
import { lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Report from "./pages/Report/Report";
import { Loader } from "./components/Loader/Loader";

import GlobalStyle from "./globalStyles";
import Expenses from "./pages/Expenses/Expenses";
import Income from "./pages/Income/Income";
import { Header } from "./components/Header/Header";
import { PublicRoute } from "./components/PublicRoute/PublicRoute";
import { getUser } from "./redux/auth/auth-operations";
import { selectIsLoading, selectToken } from "./redux/auth/auth-selectors";
import { selectIsLoadingTransaction } from "./redux/transaction/transactions-selectors";

// import { selectSid } from "./redux/auth/auth-selectors";

export const App = () => {
  const location = useLocation();
  const urlSearchParems = new URLSearchParams(location.search);
  const dispatch = useAppDispatch();
  const accessToken = urlSearchParems.get("accessToken");
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingTrx = useAppSelector(selectIsLoadingTransaction);
  console.log("accessToken", accessToken);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      if (location.pathname === "/") {
        location.pathname = "/goit-team-project-react-kapusta/home/";
      }
    }
  }, [accessToken]);

  const HomePage = lazy(() => import("./pages/Home/Home"));
  // const ExpensesPage = lazy(() => import("./pages/Expenses/Expenses"));
  // const HomePage = lazy(() => import("./pages/Home/Home"));

  return (
    <>
      <Loader isLoading={isLoading || isLoadingTrx} />
      <GlobalStyle />
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute redirectTo="/home">
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/home">
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/home">
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            >
              {/* <Route index element={<Expenses />} /> */}
              <Route index element={<Navigate to="/home/expenses" />} />
              <Route path="expenses" element={<Expenses />} />
              <Route path="income" element={<Income />} />
            </Route>
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
