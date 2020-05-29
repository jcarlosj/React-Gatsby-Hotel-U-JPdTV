import { graphql, useStaticQuery } from 'gatsby';

/** Hook */
const useRooms = () => {

    /** Consulta GraphQL */ 
    const data = useStaticQuery( graphql `
        query {
            allDatoCmsRoom {
                nodes {
                    id
                    title
                    slug
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

    console .log( 'Hook > useRooms', data );

    return data .allDatoCmsRoom .nodes .map( room => ({
        id: room .id,
        title: room .title,
        slug: room .slug,
        content: room .content,
        image: room .image
    }));
}

export default useRooms;