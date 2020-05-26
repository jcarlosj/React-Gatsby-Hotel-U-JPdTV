import React from 'react';

/** Components */
import Header from './Header';

/** MainLayout Component */
const MainLayout = ( props ) => {
    return (
        <>
            <Header />
            { props .children }
        </>
    );
}

export default MainLayout;