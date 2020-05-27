import React from 'react';

/** Components */
import MainNavigation from './MainNavigation';

/** Dependencies */
import { css } from '@emotion/core';

/** Header Component */
const Header = () => {
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
                <h1
                    css={ css `
                        color: #FFFFFF;
                        text-align: center;
                    `}
                >Hotel Gatsby</h1>
                <MainNavigation />
            </div>

        </header>
    );
}

export default Header;