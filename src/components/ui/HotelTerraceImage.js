import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Dependencies */
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

/** Style Components */
const BgImage = styled( BackgroundImage ) `
    height: 700px;
`;

/** HotelTerraceImage Component */
const HotelTerraceImage = () => {

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
        
        </BgImage>
    );
}

export default HotelTerraceImage;