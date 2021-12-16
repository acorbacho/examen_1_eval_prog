function main() {
    var select = ''
    var victorias1 = ''
    var victorias2 = ''
    var numero_maximo = 2
    var numero_minimo = 0
    var victorias = ''
    var resultado_j1 = ''
    var resultado_j2 = ''
    var victoriaj1 = ''
    var derrotaj1 = ''
    var empatej1 = ''
    var victoriaj2 = ''
    var derrotaj2 = ''
    var empatej2 = ''
    var j1 = jugador1()
    var j2 = jugador2()

    while (select != 4) {
        select = entrada('Bienvenido.\nSeleccione que desea hacer:\n1- Jugar.\n2- Mostrar datos de usuario.\n3- Salir.')

        if (select == 1) {
            
            while (victorias1 == 5 | victorias2 == 5){
                
                resultado_j1 = generador(numero_minimo, numero_maximo)
                resultado_j2 = generador(numero_minimo, numero_maximo)
                
                if (resultado_j1 = 0) {
                    resultado_j1 = 'piedra'
                } else if (resultado_j1 = 1) {
                    resultado_j1 = 'papel'
                } else {
                    resultado_j1 = 'tijeras'
                }

                if (resultado_j1 = 0) {
                    resultado_j1 = 'piedra'
                } else if (resultado_j1 = 1) {
                    resultado_j1 = 'papel'
                } else {
                    resultado_j1 = 'tijeras'
                }

                if (resultado_j1 == resultado_j2){
                    j1.sumarDatos(0,0,1)
                    j2.sumarDatos(0,0,1)
                } else if (resultado_j1 == 'piedra' && resultado_j2 == 'papel') {
                    j1.sumarDatos(0,1,0)
                    j2.sumarDatos(1,0,0)
                    victorias2++
                } else if (resultado_j1 == 'piedra' && resultado_j2 == 'tijeras') {
                    j1.sumarDatos(1,0,0)
                    j2.sumarDatos(0,1,0)
                    victorias1++
                } else if (resultado_j1 == 'papel' && resultado_j2 == 'piedra') {
                    j1.sumarDatos(1,0,0)
                    j2.sumarDatos(0,1,0)
                    victorias1++
                } else if (resultado_j1 == 'papel' && resultado_j2 == 'tijeras') {
                    j1.sumarDatos(0,1,0)
                    j2.sumarDatos(1,0,0)
                    victorias2++
                } else if (resultado_j1 == 'tijeras' && resultado_j2 == 'papel') {
                    j1.sumarDatos(1,0,0)
                    j2.sumarDatos(0,1,0)
                    victorias1++
                } else if (resultado_j1 == 'tijeras' && resultado_j2 == 'piedra') {
                    j1.sumarDatos(0,1,0)
                    j2.sumarDatos(1,0,0)
                    victorias2++
                }
            }

        } else if (select == 2) {
            salida(j1.mostrarDatos()+'\n'+j2.mostrarDatos())
        } else if (select == 3) {
            salida('Gracias por jugar.\n¡Hasta la próxima!')
        } else {
            salida('Error.')
        }
    }
}
main()