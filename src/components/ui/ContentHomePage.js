import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Dependencies */
import Image from 'gatsby-image';

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

    console .log( 'GraphQL - ContentHomePage', dataPage .allDatoCmsPage .nodes[ 0 ] );

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

export default ContentHomePage;