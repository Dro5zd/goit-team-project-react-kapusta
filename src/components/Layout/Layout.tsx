import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';

export const Layout = () => {

    return (
        <>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
            </Suspense>
        </>
    );
};