import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Component */
const ContentHomePage = () => {

    /** Consulta GraphQL para obtener contenido estático para el Home */ 
    const dataPage = useStaticQuery( graphql `
        query {
            allDatoCmsPage( filter: { slug: { eq: "home" } } ) {
                nodes {
                    title
                    content
                    image {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    console .log( 'GraphQL - ContentHomePage', dataPage );

    return( 
        <>
            <h2>Contenido de la pagina de Home</h2>
        </>
    );
}

export default ContentHomePage;