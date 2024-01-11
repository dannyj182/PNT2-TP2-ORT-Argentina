import config from '../config.js'
import {PasajerosFactoryDAO} from '../model/DAO/pasajeros/pasajerosFactory.js'
import enviarMail from "../utils/enviarEmail.js";

export class PasajerosService {
    constructor() {
        this.pasajerosModel = PasajerosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }
    registrarPasajero = async pasajero => {
        const resultado = this.validarPasajero(pasajero)
        if(resultado.validacion){
            const pasajeroBuscado = await this.pasajerosModel.buscarPasajero(pasajero.pasaporte)
            if(pasajeroBuscado){
                return {
                    errorMsg: "Error, pasajero ya existe"
                }
            }else{
                pasajero.estatus = "Registrado"
                this.validarHora(pasajero)
                return await this.pasajerosModel.registrarPasajero(pasajero)
            }
        }else{
            return resultado
        }
    }
    validarPasajero = pasajero => {
        if(pasajero.nombre == null){
            return {
                errorMsg: "Error, nombre nulo"
            }
        }else if(pasajero.apellido == null){
            return {
                errorMsg: "Error, apellido nulo"
            }
        }else if(isNaN(pasajero.pasaporte) || pasajero.pasaporte == null){
            return {
                errorMsg: "Error, número de pasaporte inválido"
            }
        }else{
            return {
                validacion: "Todo OK"
            }
        }
    }
    confirmarPasajero = async pasajero => {
        const resultado = this.validarPasajero(pasajero)
        if(resultado.validacion){
            const pasajeroRegistrado = await this.pasajerosModel.buscarPasajero(pasajero.pasaporte)
            if(pasajeroRegistrado){
                if(pasajeroRegistrado.estatus == "Registrado"){
                    pasajeroRegistrado.estatus = "Confirmado"
                    this.validarHora(pasajero)
                    return await this.pasajerosModel.actualizarPasajero(pasajeroRegistrado)
                }else{
                    return {
                        errorMsg: "Error, pasajero debe estar registrado para confirmarlo"
                    }
                }
            }else{
                return {
                    errorMsg: "Error, pasajero no existe"
                }
            }
        }else{
            return resultado
        }
    }
    revisionPasajero = async pasajero => {
        const resultado = this.validarPasajero(pasajero)
        if(resultado.validacion){
            const pasajeroConfirmado = await this.pasajerosModel.buscarPasajero(pasajero.pasaporte)
            if(pasajeroConfirmado){
                if(pasajeroConfirmado.estatus == "Confirmado"){
                    pasajeroConfirmado.estatus = "Listo para embarque"
                    this.validarHora(pasajero)
                    return await this.pasajerosModel.actualizarPasajero(pasajeroConfirmado)
                }else{
                    return {
                        errorMsg: "Error, pasajero debe estar confirmado para que pueda proceder al embarque"
                    }
                }
            }else{
                return {
                    errorMsg: "Error, pasajero no existe"
                }
            }
        }else{
            return resultado
        }
    }
    validarHora = async pasajero => {
        const hora = new Date().getHours() - pasajero.horaVuelo
        if(hora <= 1){
            await enviarMail(pasajero)
        }
    }
}