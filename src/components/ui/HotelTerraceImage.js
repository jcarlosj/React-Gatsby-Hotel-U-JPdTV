import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Dependencies */
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

/** Hooks */
import useSeo from '../../hooks/useSeo';

/** Style Components */
const 
    BgImage = styled( BackgroundImage ) `
        height: 700px;
    `,
    ContentBgImage = styled .div `
        align-items: center;
        background-image: linear-gradient( to top, rgba( 34, 49, 63, .65), rgba( 34, 49, 63, .65) );
        color: white;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        h1 {
            font-size: 4rem;
            margin: 0;

            @media ( min-width 992px ) {
                font-size: 5.8rem;
            }
        }
        p {
            font-size: 2rem;

            @media ( min-width 992px ) {
                font-size: 2.7rem;
            }
        }
    `;

/** HotelTerraceImage Component */
const HotelTerraceImage = () => {

    const 
        seo = useSeo(),
        { siteName, fallbackSeo: { description } } = seo;        /** Destructuring Data */

    /** Consulta GraphQL para obtener imagen estática 
     *      - Agregar Fragment '...GatsbyImageSharpFluid_withWebp' 
     *        (No es soportado por GraphiQL, pero Gasttby si)*/ 
    const { image } = useStaticQuery( graphql `
        query {
            image: file( relativePath: { eq: "hotel-terrace.jpg" } )
            {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    console .log( 'GraphQL - HotelTerraceImage', image .sharp .fluid );

    return (
        <BgImage
            tag="section"
            fluid={ image .sharp .fluid }
            fadeIn="soft"
        >
            <ContentBgImage>
                <h1>Bienvenido a { siteName }</h1>
                <p>{ description }</p>
            </ContentBgImage>
        </BgImage>
    );
}

export default HotelTerraceImage;