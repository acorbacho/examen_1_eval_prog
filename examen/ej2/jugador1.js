function jugador1() {
    var Player = function () {
        this.victoria = ''
        this.derrota = ''
        this.empate = ''
        function mostrarDatos() {
            prompt('El usuario tiene: '+this.victoria+'victorias'+this.derrota+' derrotas '+this.empate+' empates')
        }
        function sumarDatos(victoria, derrota, empate) {
            this.victoria = this.victoria + victoria
            this.derrota = this.derrota + derrota
            this.empate = this.empate + empate
        }
    }
    /**
     * Almacena el perfil.
     * @type {object}
     */
    jugador1 = new Player()
    return jugador1
}