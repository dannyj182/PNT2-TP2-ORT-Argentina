import config from '../config.js'
import {NumerosFactoryDAO} from '../model/DAO/numerosFactory.js'

export class ApiNumeros{
    constructor(){
        this.numerosModel = NumerosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }
    obtenerNumeros = async _ => {
        return await this.numerosModel.findNumeros()
    }
    obtenerPromedio = async _ => {
        return await this.numerosModel.findPromedio()
    }
    obtenerMinMax = async _ => {
        return await this.numerosModel.findMinMax()
    }
    obtenerCantidad = async _ => {
        return await this.numerosModel.findCantidad()
    }
    guardarNumero = async numero => {
        return await this.numerosModel.saveNumero(numero)
    }
}