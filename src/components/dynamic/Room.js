import { graphql } from 'gatsby';

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
const Room = ({ data }) => { 

    console .log( 'Room (Dynamic)', data );

    return ( 
        <div>
            <h1>Room.js</h1>
            <p>Inspecciona la consola</p>
        </div>
    );
}

export default Room;