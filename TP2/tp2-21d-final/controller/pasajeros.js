import {PasajerosService} from '../service/pasajeros.js'

export class ControladorPasajeros {
    constructor() {
        this.pasajerosService = new PasajerosService()
    }
    registrarPasajero = async (req,res) => {
        const pasajero = req.body
        res.json( await this.pasajerosService.registrarPasajero(pasajero) )
    }
    confirmarPasajero = async (req,res) => {
        const pasajero = req.body
        res.json( await this.pasajerosService.confirmarPasajero(pasajero) )
    }
    revisionPasajero = async (req,res) => {
        const pasajero = req.body
        res.json( await this.pasajerosService.revisionPasajero(pasajero) )
    }
}