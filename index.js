
let countries = [];

/**
 * @param void
 * @returns 1. Imprime por consola un arreglo de los paises ordenados alfabéticamente.
 *          2. Imprime por consola los países que empiezan con la letra C.
 */
async function getPaises() {
    try {
        const datos = await fetch("https://restcountries.com/v3.1/lang/spanish?fields=name,capital");
        if (!datos.ok) {
            throw new Error("Error al obtener datos");
        }

        const jsonData = await datos.json();

        console.log(jsonData); // Respuesta 1: Obtener toda la data de la url en el fetch
        

        await jsonData.map((d) => {
            countries.push(d.name.common);
        });

        const countryOrder = countries.sort();
        console.log(countryOrder); // Respuesta 2: Obtiene todos los paises ordenados alfabeticamente

        const countryC = countries.filter(c => c[0] === 'C');
        console.log(countryC); // Respuesta 3: Muestra todos los paises iniciados con la letra C


    }
    catch (error) {
        console.log("Error", error);
    }
}

getPaises();
