//requerimos al framework
const express = require("express")

//Lamamos a su metodo
const app = express()

//Asignamos puerto
app.listen('4000', () => {
    console.log('Conexion en el puerto 4000')
})

//creamos el metodo http -> le asignamos una ruta y una funcion flecha con (req, res) como parametros
app.get('/', (req, res) => {
    res.send('Mensaje de prueba con metodo GET')
})

app.get('/api-version', (req, res) => {
    res.send({
        author: "Fernando Romo",
        version: "1.0",
        tech: "Framework Express"
    })
})