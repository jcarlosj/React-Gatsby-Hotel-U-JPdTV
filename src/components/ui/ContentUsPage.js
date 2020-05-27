import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Dependencies */
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/** Style Components */
const ContentUs = styled .main `
    margin: 0 auto;
    max-width: 1200px;
    padding: 4rem 0;
    width: 95%;

    @media ( min-width: 768px ) {
        colum-gap: 2rem;
        display: grid;
        grid-template-columns: repeat( 2 , 1fr );
    }

    p {
        line-height: 1.6;
    }
`;

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
            <h2
                css={ css `
                    font-size: 4rem;
                    margin-top: 4rem;
                    text-align: center;
                `}
            >{ title }</h2>
            <ContentUs>
                <p>{ content }</p>
                <Image 
                    fluid={ image .fluid } 
                />
            </ContentUs>
        </>
    );
}

export default ContentUsPage;