/** Implement Gatsby's Node APIs in this file.
 *  See: https://www.gatsbyjs.org/docs/node-apis/
 *  Note: You can delete this file if you're not using it */

/** Crear Paginas dinámicas por cada habitacion existente */
exports .createPages = async ({ actions, graphql, reporter }) => {
    /** Consulta GraphQL para obtener los 'slug' de cada pagina existente (Se puede implementar usando el ID) */
    const resolve = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }
    `);

    console .log( 'gatsby-node', resolve );

    /** Valida si hay errores en la consulta de Gatsby */
    if( resolve .errors ) {
        reporter .panic( 'ERROR: No se obtuvo resultados \n', resolve .errors  );
    }

    const rooms = resolve .data .allDatoCmsRoom .nodes;

    /** Itera los resultados encontrados */
    rooms .forEach( room => {
        /** Creación dinámica a partir de un objeto que indica configuración de cada pagina generada */
        actions .createPage({
            path: room .slug,                                                   /** Debe ser el mismo que se usa en el path del enlace o boton en la vista (puede usarse el ID) */
            component: require .resolve( `./src/components/dynamic/Room` ),     /** Componente que renderizará la vista dinámica */
            context: {                                                          /** Pasa valores al Componente */
                slug: room .slug
            }
        });
    });
}