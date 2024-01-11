import {PasajerosMem} from './pasajerosMem.js'

export class PasajerosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log(':::::::: Persistiendo en Memoria ::::::::')
                return new PasajerosMem()

            default:
                console.log(':::::::: Persistiendo en default (Memoria) ::::::::')
                return new PasajerosMem()
        }
    }
}