/**
 * Función que genera un número aleatorio.
 * @returns {number} - Devuelve el número.
 */
 function generador(min, max) {
    numero = Math.floor(Math.random() * (max - min)) + min
    return numero
}