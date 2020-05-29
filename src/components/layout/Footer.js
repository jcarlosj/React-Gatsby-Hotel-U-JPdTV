import React from 'react';
import { Link } from 'gatsby';

/** Dependencies */
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** Components */
import MainNavigation from './MainNavigation';

/** Style Components */
const Logo = styled( Link ) `
    color: #FFFFFF;
    text-align: center;
    text-decoration: none;
`;

/** Footer Component */
const Footer = () => {

    const currentYear = new Date() .getFullYear();

    return (
        <>
            <footer
                css={ css `
                    background-color: #222222;
                    padding: 1rem;
                `}
            >
                <div
                    css={ css `
                        margin: 0 auto;
                        max-width: 1200px;

                        @media ( min-width: 768px ) {
                            align-items: center;
                            display: flex;
                            justify-content: space-between;
                        }
                    `}
                >
                    <MainNavigation />
                    <p css={ css `color: white;`}>Powered by: 
                        <a 
                            href="https://github.com/jcarlosj"
                            css={ css `
                                color: white;
                                text-decoration: none;
                            `}
                        > jcarlosj</a>
                    </p>
                </div>

            </footer>
            <p css={ css `
                background-color: #333333;
                color: white;
                margin: 0;
                padding: 1rem;
                text-align: center;
            `}>Hotel Gatsby { currentYear } &copy; Todos los derechos reservados</p>
        </>
    );
}

export default Footer;