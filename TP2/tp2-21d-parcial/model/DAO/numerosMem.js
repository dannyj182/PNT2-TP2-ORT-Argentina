export class NumerosMemDAO{
    constructor(){
        this.numeros = [1,2,3,4,5,6,7,8,9,10]
    }
    findNumeros = async _ => {
        return {numeros: this.numeros}
    }
    findPromedio = async _ => {
        let cantNumeros = this.numeros.length
        if(cantNumeros != 0){
            let sumaNumeros = 0
            this.numeros.forEach(numero => sumaNumeros+= numero)
            let promedio = sumaNumeros / cantNumeros
            return { promedio }
        }else{
            return { promedio: 0 }
        }
    }
    findMinMax = async _ => {
        if(this.numeros.length != 0){
            let min = Math.min(...this.numeros)
            let max = Math.max(...this.numeros)
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
    }
    findCantidad = async _ => {
        return {cantidad: this.numeros.length}
    }
    saveNumero = async numeroIngresado => {
        let numero = Number(numeroIngresado.numero)
        if(!isNaN(numero)){
            this.numeros.push(numero)
            return { status: 'ok'}
        }else{
            return { status: 'No ingresó un número'}
        }
    }
}