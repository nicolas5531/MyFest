// creo una constante en la cual requiero o importo la libreria express
const express = require("express")
const cors = require("cors")

// Creamos una aplicacion(un servidor) que va a ser una instancia de express. Esa app es mi aplicacion
const app = express() 

// middlewares o funciones que se ejecutan antes de llegar a la ruta. Esto tiene que estar antes del controlador.
app.use(cors())

// Este es el controlador. Es una funcion de callback.Cuando haga un pedido de tipo get a /api.
// Recibe dos parametros request(pedido) y response(respuesta)-(son dos objetos)
// Entonces cuando le llegue el pedido de tipo get a /api ejecuta esta funcion que se llama controlador
// la req me va a traer datos del pedido que le hacemos. Un pedido en un fetch o en una barra del navegador.
// La res va a ser la respuesta del backend al pedido del frontend
app.get('/api', (req, res) => {
    // la funcion es el controlador de 18 a 20
    res.json({
        mensaje: 'queonda'
    })
})

//Pongo a escuchar la app le puedo poner cualquiera menos 3000(frontend) ni 5500(usa visual studio)
// El segundo parametro es una funcion de callback
app.listen(4000, () => console.log("App listening on port 4000"))
// Una vez que levanto el backend queda el servidor escuchando a la espera de que algun front end o un cliente 
// tipo insomnia o postman le haga un pedido
//Cuando voy al navegador y accedo al puerto 4000 me dice cannot get quiere decir q no tengo ninguna ruta preparada
// en mi API que reciba ningun pedido de tipo get al puerto 4000