import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

/** Dependencies */
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

/** Style Components */
const ContentHome = styled .section `
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
            <h2
            css={ css `
                font-size: 4rem;
                margin-top: 4rem;
                text-align: center;
            `}>{ title }</h2>
            <ContentHome>
                <p>{ content }</p>
                <Image 
                    fluid={ image .fluid } 
                />
            </ContentHome>
        </>
    );
}

export default ContentHomePage;