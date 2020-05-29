import { graphql, useStaticQuery } from 'gatsby';

/** Hook */
const useRooms = () => {

    /** Consulta GraphQL */ 
    const data = useStaticQuery( graphql `
        query {
            datoCmsSite {
                globalSeo {
                    siteName
                    titleSuffix
                    fallbackSeo {
                        title
                        description
                    }
                }
            }
        }
    `);

    console .log( 'Hook > useSeo', data );

    return data .datoCmsSite .globalSeo;
}

export default useRooms;