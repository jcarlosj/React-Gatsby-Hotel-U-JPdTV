import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Component */
const ContentUsPage = () => {

    /** Consulta GraphQL para obtener contenido estático para pagina de nosotros */ 
    const dataPage = useStaticQuery( graphql `
        query {
            allDatoCmsPage( filter: { slug: { eq: "nosotros" } } ) {
                nodes {
                    title
                    content
                    image {
                        fluid( maxWidth: 1200 ) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    console .log( 'GraphQL - ContentUsPage', dataPage );

    return( 
        <>
            <h2>Contenido de la pagina nosotros</h2>
        </>
    );
}

export default ContentUsPage;