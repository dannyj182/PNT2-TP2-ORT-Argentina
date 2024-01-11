import {CnxMongoDB} from '../DB.js'

export class NumerosMongoDAO{
    findNumeros = async _ => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            if(numeros.length != 0){
                let nuevoArreglo = []
                numeros.forEach(objeto => nuevoArreglo.push(objeto.numero))
                return { numeros: nuevoArreglo }
            }else{
                return []
            }
        } catch {
            return []
        }
    }
    findPromedio = async _ => {
        if(!CnxMongoDB.connection) return []
        try{
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            if(numeros.length != 0){
                let cantNumeros = numeros.length
                let sumaNumeros = 0
                numeros.forEach(numero => sumaNumeros+= numero.numero)
                let promedio = sumaNumeros / cantNumeros
                return { promedio }
            }else{
                return { promedio: 0 }
            }
        }
        catch{
            return []
        }
    }
    findMinMax = async _ => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            if(numeros.length != 0){
                let nuevoArreglo = []
                numeros.forEach(objeto => nuevoArreglo.push(objeto.numero))
                let min = Math.min(...nuevoArreglo)
                let max = Math.max(...nuevoArreglo)
                return {
                    min,
                    max
                }
            }else{
                return {
                    min: 0,
                    max: 0
                }
            }
        } catch {
            return []
        }
    }
    findCantidad = async _ => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            return {cantidad: numeros.length}
        } catch {
            return []
        }
    }
    saveNumero = async numeroIngresado => {
        if(!CnxMongoDB.connection) return {}
        numeroIngresado.numero = Number(numeroIngresado.numero)
        if(!isNaN(numeroIngresado.numero)){
            let respuesta = await CnxMongoDB.db.collection('numeros').insertOne(numeroIngresado)
            if(respuesta.acknowledged) return { status: 'ok'}
            else return { status: 'fail'}
        }
    }
}