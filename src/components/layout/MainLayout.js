import React from 'react';

/** Dependencies */
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/core';

/** Components */
import Header from './Header';

/** MainLayout Component */
const MainLayout = ( props ) => {
    return (
        <>
            <Global
                styles={ css `
                    html {
                        font-size: 62.5%;
                    }
                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Roboto', serif;
                    }
                    h3, h4, h5, h6 {
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1, h2, h3 {
                        line-height: 1.5;
                        margin: 0;
                    }
                    ul {
                        margin: 0;
                        list-style: none;
                        padding: 0;
                    }
                `}
            />
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