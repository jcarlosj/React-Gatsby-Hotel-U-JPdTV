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

/** Header Component */
const Header = ({ siteName }) => {
    return (
        <header
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
                <Logo
                    to="/"
                >
                    <h1>{ siteName }</h1>
                </Logo>
                <MainNavigation />
            </div>

        </header>
    );
}

export default Header;