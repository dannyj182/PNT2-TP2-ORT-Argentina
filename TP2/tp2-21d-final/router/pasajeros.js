import express from 'express'
import {ControladorPasajeros} from '../controller/Pasajeros.js'

export class RouterPasajeros {
    constructor() {
        this.router = express.Router()
        this.controladorPasajeros = new ControladorPasajeros()
    }
    start() {
        this.router.post('/registrar', this.controladorPasajeros.registrarPasajero)
        this.router.post('/confirmar', this.controladorPasajeros.confirmarPasajero)
        this.router.post('/revision', this.controladorPasajeros.revisionPasajero)
        return this.router
    }
}