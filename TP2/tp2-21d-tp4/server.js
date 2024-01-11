import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

try{
    console.log('Conectando a la base de datos')
    await client.connect()
    console.log('Base de datos conectada')

    const db = client.db('empresa')

    let clientes = await db.collection('clientes').find({}).toArray()
    console.log('Clientes:')
    clientes.forEach(c => console.log({nombre: c.nombre, apellido: c.apellido}))

    await db.collection('productos').updateMany({}, {$set: {codigo: 'xxx-xxxxx'}})

    let productos = await db.collection('productos').find({}).toArray()
    console.log('Productos:')
    productos.forEach(p => console.log({nombre: p.nombre, precio: p.precio, codigo: p.codigo}))

    client.close()
}
catch(error){
    console.log(`Error: ${error.message}`)
}