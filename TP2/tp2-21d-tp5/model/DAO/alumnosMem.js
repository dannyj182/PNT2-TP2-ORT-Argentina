export class AlumnosMemDAO{
    constructor(){
        this.alumnos = [
            { "id": "1", "nombre": "Danny", "apellido": "Jimenez", "curso": "21A", "nota": 4},
            { "id": "2", "nombre": "Daniela", "apellido": "Molina", "curso": "21B", "nota": 5},
            { "id": "3", "nombre": "Juan", "apellido": "Garcia", "curso": "21C", "nota": 6},
            { "id": "4", "nombre": "Genesis", "apellido": "Alonso", "curso": "21D", "nota": 7},
        ]
    }
    findAlumnos = async _ => {
        return this.alumnos
    }
    findResumen = async _ => {
        let sumaNotas = 0
        let cantNotas = this.alumnos.length
        this.alumnos.forEach(alumno => sumaNotas+= alumno.nota)
        let promedio = sumaNotas / cantNotas
        return {
            promedio,
            cantNotas
        }
    }
    saveAlumno = async alumno => {
        alumno.nota = parseInt(alumno.nota)
        const id = parseInt(this.alumnos[this.alumnos.length-1].id) + 1
        alumno.id = String(id)
        this.alumnos.push(alumno)
        return { status: 'ok'}
    }
}