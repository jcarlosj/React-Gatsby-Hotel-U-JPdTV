import React from 'react';

/** Dependencies */
import { Helmet } from 'react-helmet';

/** Components */
import Header from './Header';

/** MainLayout Component */
const MainLayout = ( props ) => {
    return (
        <>
            <Helmet>
                <title>Gatsby Hotel</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header />
            { props .children }
        </>
    );
}

export default MainLayout;