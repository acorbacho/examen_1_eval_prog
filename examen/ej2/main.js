function main() {
    var select = ''
    var numero_maximo = 2
    var numero_minimo = 0
    var resultado_j1 = ''
    var resultado_j2 = ''
    var j1 = jugador1()
    var j2 = jugador2()

    while (select != 3) {
        select = entrada('Bienvenido.\nSeleccione que desea hacer:\n1- Jugar.\n2- Mostrar datos de usuario.\n3- Salir.')
        var victoriasj1 = ''
        var derrotasj1 = ''
        var empatej1 = ''
        var victoriasj2 = ''
        var derrotasj2 = ''
        var empatej2 = ''

        if (select == 1) {

            while (victoriasj1 < 5 && victoriasj2 < 5) {

                resultado_j1 = generador(numero_minimo, numero_maximo)
                resultado_j2 = generador(numero_minimo, numero_maximo)

                if (resultado_j1 == 0) {
                    resultado_j1 = 'piedra'
                } else if (resultado_j1 == 1) {
                    resultado_j1 = 'papel'
                } else {
                    resultado_j1 = 'tijeras'
                }

                if (resultado_j2 == 0) {
                    resultado_j2 = 'piedra'
                } else if (resultado_j2 == 1) {
                    resultado_j2 = 'papel'
                } else {
                    resultado_j2 = 'tijeras'
                }

                if (resultado_j1 == resultado_j2) {
                    salida('Jugador1: ' + resultado_j1 + ' Jugador2: ' + resultado_j2 + '\nHabéis empatado.')
                    j1.sumarDatos(0, 0, 1)
                    j2.sumarDatos(0, 0, 1)
                    empatej1++
                    empatej2++
                } else if (resultado_j1 == 'piedra' && resultado_j2 == 'papel') {
                    salida('Jugador1: ' + resultado_j1 + ' Jugador2: ' + resultado_j2 + '\nJ2 GANA.')
                    j1.sumarDatos(0, 1, 0)
                    j2.sumarDatos(1, 0, 0)
                    victoriasj2++
                    derrotasj1++
                } else if (resultado_j1 == 'piedra' && resultado_j2 == 'tijeras') {
                    salida('Jugador1: ' + resultado_j1 + ' Jugador2: ' + resultado_j2 + '\nJ1 GANA.')
                    j1.sumarDatos(1, 0, 0)
                    j2.sumarDatos(0, 1, 0)
                    victoriasj1++
                    derrotasj2++
                } else if (resultado_j1 == 'papel' && resultado_j2 == 'piedra') {
                    salida('Jugador1: ' + resultado_j1 + ' Jugador2: ' + resultado_j2 + '\nJ1 GANA.')
                    j1.sumarDatos(1, 0, 0)
                    j2.sumarDatos(0, 1, 0)
                    victoriasj1++
                    derrotasj2++
                } else if (resultado_j1 == 'papel' && resultado_j2 == 'tijeras') {
                    salida('Jugador1: ' + resultado_j1 + ' Jugador2: ' + resultado_j2 + '\nJ2 GANA.')
                    j1.sumarDatos(0, 1, 0)
                    j2.sumarDatos(1, 0, 0)
                    victoriasj2++
                    derrotasj1++
                } else if (resultado_j1 == 'tijeras' && resultado_j2 == 'papel') {
                    salida('Jugador1: ' + resultado_j1 + ' Jugador2: ' + resultado_j2 + '\nJ1 GANA.')
                    j1.sumarDatos(1, 0, 0)
                    j2.sumarDatos(0, 1, 0)
                    victoriasj1++
                    derrotasj2++
                } else if (resultado_j1 == 'tijeras' && resultado_j2 == 'piedra') {
                    salida('Jugador1: ' + resultado_j1 + ' Jugador2: ' + resultado_j2 + '\nJ2 GANA.')
                    j1.sumarDatos(0, 1, 0)
                    j2.sumarDatos(1, 0, 0)
                    victoriasj2++
                    derrotasj1++
                }
            }
            if (victoriasj1 == 5) {
                salida('J1 GANA LA PARTIDA.')
            } else {
                salida('J2 GANA LA PARTIDA.')
            }

        } else if (select == 2) {
            j1.mostrarDatos() + '\n' + j2.mostrarDatos()
        } else if (select == 3) {
            salida('Gracias por jugar.\n¡Hasta la próxima!')
        } else {
            salida('Error.')
        }
    }
}
main()