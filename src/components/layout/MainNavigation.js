import React from 'react';
import { Link } from 'gatsby';

/** Dependencies */
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** Style Component */
const 
    Nav = styled .nav `
        display: flex;
        justify-content: center;
        padding-botton: 3rem;

        @media ( min-width: 768px ) {
            padding-bottom: 0;
        }
    `,
    NavLink = styled( Link ) `
        color: white;
        font-family: 'PT Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1rem;
        margin-right: 1rem;
        padding: 1rem;
        text-decoration: none;

        &:last-of-type {
            margin-right: 0;
        }

        &.current-page {
            border-bottom: 2px solid white;
        }
    `;

/** MainNavigation Component */
const MainNavigation = () => {
    return (
        <Nav>
            <NavLink 
                to="/" 
                activeClassName="current-page"
            >Inicio</NavLink>
            <NavLink 
                to="/us" 
                activeClassName="current-page"
            >Nosotros</NavLink>
        </Nav>
    );
}

export default MainNavigation;