import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** HotelTerraceImage Component */
const HotelTerraceImage = () => {

    /** Consulta GraphQL para obtener imagen estática */ 
    const { image } = useStaticQuery( graphql `
        query {
            image: file( relativePath: { eq: "hotel-terrace.jpg" } )
            {
                sharp: childImageSharp {
                    fluid {
                        srcSetWebp
                    }
                }
            }
        }
    `);

    console .log( 'GraphQL - HotelTerraceImage', image );

    return (
        <>
            Imagen - HotelTerraceImage
        </>
    );
}

export default HotelTerraceImage;