import React from 'react';
import { Link } from 'gatsby';

/** Dependencies */
import { css } from '@emotion/core';

/** MainNavigation Component */
const MainNavigation = () => {
    return (
        <nav>
            <Link to="/" >Inicio</Link>
            <Link to="/us" >Nosotros</Link>
        </nav>
    );
}

export default MainNavigation;