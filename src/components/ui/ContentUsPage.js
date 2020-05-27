import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Dependencies */
import Image from 'gatsby-image';

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

    /** Destructuring response GrapQL query */
    const { title, content, image } = dataPage .allDatoCmsPage .nodes[ 0 ];

    return( 
        <>
            <h2>{ title }</h2>
            <div>
                <p>{ content }</p>
                <Image 
                    fluid={ image .fluid } 
                />
            </div>
        </>
    );
}

export default ContentUsPage;