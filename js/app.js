// URL de la API
const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'; // Reemplaza esta URL con la de la API que quieres consultar

// Función para realizar la solicitud a la API
async function obtenerDatos() {
    try {

        const respuesta = await fetch(url); // Realizar la solicitud
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud a la API');
        }
        const datos = await respuesta.json(); // Convertir la respuesta a JSON

        // Transformar el texto
        let texto = datos['text'];
        texto = texto.replace(/\/"/g, '"');

        document.getElementById('resultado').textContent = texto;

    } catch (error) {
        console.error('Error:', error);
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = 'Hubo un error al realizar la solicitud a la API.';
    }
}

// Llamar a la función para obtener datos cuando se cargue la página
document.addEventListener('DOMContentLoaded', obtenerDatos);
