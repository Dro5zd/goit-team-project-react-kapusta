import React, { Suspense } from "react";
import {Navigate, Outlet} from 'react-router-dom';
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
        {/*<Navigate to='/login'/>*/}
      <div style={{ height: "56px" }}>Header</div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
