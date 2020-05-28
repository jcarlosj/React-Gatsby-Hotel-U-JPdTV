import React from 'react';
import { Link } from 'gatsby';

/** Dependencies */
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** Style Components */
const 
    Button = styled( Link ) `
        background-color: rgba( 44, 62, 80, .80 );
        color: white;
        display: block;
        font-weight: 700;
        margin: 2rem 0;
        padding: 1rem;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%;
    `;

/** Component */
const BriefRoomInformation = ({ room }) => {

    /** Destructuring data object */
    const { id, title, slug, content, image } = room;

    return (
        <li
            css={ css `
                border: 1px solid #E1E1E1;
                margin: 1rem 0;
            `}
        >
            <Image 
                fluid={ image .fluid } 
                alt={ title }
            />
            <div
                css={ css `
                    padding: 2rem;
                `}
            >
                <h3
                    css={ css `
                        font-size: 3rem;
                    `}
                >{ title }</h3>
                <p>{ content }</p>
                <Button
                    to="/"
                >Ver Detalles</Button>
            </div>
        </li>
    );
}

export default BriefRoomInformation;