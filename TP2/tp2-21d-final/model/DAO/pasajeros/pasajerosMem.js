export class PasajerosMem {
    constructor() {
        this.pasajeros = [
            {
                id: "1",
                nombre: "Danny",
                apellido: "Jimenez",
                pasaporte: 95542176,
                fechaNacimiento: "12/04/1990",
                horaVuelo: 20
            }
        ]
    }
    registrarPasajero = async pasajero => {
        const id = parseInt(this.pasajeros[this.pasajeros.length-1].id) + 1
        pasajero.id = String(id)
        this.pasajeros.push(pasajero)
        return pasajero
    }
    buscarPasajero = async pasaporte => {
        return this.pasajeros.find(pasajero => pasajero.pasaporte == pasaporte)    
    }
    actualizarPasajero = async pasajero => {
        const index = this.pasajeros.findIndex(p => p.pasaporte == pasajero.pasaporte)
        this.pasajeros.splice(index, 1, pasajero)
        return pasajero
    }
}