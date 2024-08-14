// URL de la API
const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'; // Reemplaza esta URL con la de la API que quieres consultar

// Función para realizar la solicitud a la API
async function obtenerDatos() {
    try {

        const opciones = {
            method: 'GET', // Método de la solicitud
            headers: {
                'Accept': 'text/plain' // Cabecera que indica que aceptas una respuesta en texto plano
            }
        };

        const respuesta = await fetch(url, opciones); // Realizar la solicitud
        if (!respuesta.ok) {
            throw new Error('Error en la solicitud a la API');
        }
        const datos = await respuesta.text(); // Convertir la respuesta a JSON

        document.getElementById('resultado').textContent = datos.split('Source:')[0].trim().replace(/^>\s*/, ''); // Formato legible para el JSON

    } catch (error) {
        console.error('Error:', error);
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = 'Hubo un error al realizar la solicitud a la API.';
    }
}

// Llamar a la función para obtener datos cuando se cargue la página
document.addEventListener('DOMContentLoaded', obtenerDatos);
