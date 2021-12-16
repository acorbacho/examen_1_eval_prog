function main() {
    var array_numeros = []
    var array_letras = []
    var select = ''
    var entrada_usuario = ''

    while (select != 4) {
        select = entrada('Bienvenido.\nSeleccione que desea hacer:\n1- Introducir valores en array de números.\n2- Introducir valores en array de letras.\n3- Mostrar los arrays.\n4- Salir.')

        if (select == 1) {
            entrada_usuario = entrada('Introduce un número del 0 al 9')
            if(isNaN(entrada_usuario) | entrada_usuario > 9) {
                salida('No válido')
            } else {
                array_numeros.push(entrada_usuario)
            }

        } else if (select == 2) {
            entrada_usuario = entrada('Introduce letras, como máximo 4.')
            if(entrada_usuario.length > 4) {
                salida('No válido')
            } else {
                array_letras.push(entrada_usuario)
            }
        } else if (select == 3) {
            salida('El array de números es: '+array_numeros+'\nEl array de letras es: '+array_letras)
        } else if (select == 4) {
            salida('Gracias por utilizar nuestro servicio.\n¡Hasta la próxima!')
        } else {
            salida('Error.')
        }
    }
}
main()