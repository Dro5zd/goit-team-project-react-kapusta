import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import {Container} from './Layout.styled';

export const Layout = () => {
    return (
        <Container>
            {/*// @ts-ignore*/}
            <div style={{height: '56px'}}>Header</div>
            {/*// @ts-ignore*/}
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>
        </Container>
    );
};
