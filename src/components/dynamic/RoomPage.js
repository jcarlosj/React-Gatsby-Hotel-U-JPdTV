import { graphql } from 'gatsby';

/** Dependencies */
import Image from 'gatsby-image';
import { css } from '@emotion/core';

/** Components */
import MainLayout from '../layout/MainLayout';

/** Consulta GrapQL 
 * Obtiene los datos específicos de una [entidad] habitación */
export const data = graphql `
    query( $slug: String! ) {
        allDatoCmsRoom( filter: { slug: { eq: $slug } } ) {
            nodes {
                title
                content
                image {
                    fluid ( maxWidth: 1200 ) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`; 

/** Dynamic Component */
const RoomPage = ( { data: { allDatoCmsRoom: { nodes } } } ) => {         /** Destructuring Props */

    console .log( 'RoomPage (Dynamic)', data );

    /** Destructuring Data */
    const { title, content, image } = nodes[ 0 ]; 

    return ( 
        <MainLayout>
            <main
                css={ css `
                    margin: 5rem auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <h1
                    css={ css `
                        margin-top: 4rem;
                        text-align: center;
                    `}
                >{ title }</h1>
                <p>{ content }</p>
                <Image 
                    fluid={ image .fluid } 
                    alt={ title }
                />
            </main>
        </MainLayout>
    );
}

export default RoomPage;