function jugador2() {
    var Player = function () {
        this.victoria = 0
        this.derrota = 0
        this.empate = 0
        this.mostrarDatos = function () {
            salida('J2 tiene: ' + this.victoria + ' victorias ' + this.derrota + ' derrotas ' + this.empate + ' empates')
        }
        this.sumarDatos = function (victoria, derrota, empate) {
            this.victoria = this.victoria + victoria
            this.derrota = this.derrota + derrota
            this.empate = this.empate + empate
        }
    }
    /**
     * Almacena el perfil.
     * @type {object}
     */
    var jugador2 = new Player()
    return jugador2
}