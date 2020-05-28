import { graphql } from 'gatsby';

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
            <main>
                <h1>{ title }</h1>
                <p>{ content }</p>
                <img 
                    src={ image .fluid .src } 
                    alt={ title }
                />
            </main>
        </MainLayout>
    );
}

export default RoomPage;