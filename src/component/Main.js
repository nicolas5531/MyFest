//rcc Va a ser el contenedor del contenido principal y va a ser un componente de clase
//padre que actua como interlocutor de formulario e invitados
import React, { Component } from 'react'
import { Formulario } from './Formulario'
import { Invitados } from './Invitados'
// Funcionamiento: Hay un padre que es el main con un estado que tiene dos propiedades
// invitados que es un array y nuevoUsuario que es un objeto temporario que se va a ir alimentando
//  con lo que el usuario ingresa en el imput, atravez de una funcion que se ejecuta cada vez que se cambia el input.
// esa funcion captura el valor y quien es el input q se esta modificando, con esas dos variables 
// hace un setState y modifica el usuario temporario que estoy creando. 
// Cuando el usuario hace click en enviar eso dispara la funcion agregar invitado.
//agarra el usuario temporario que fui creando y lo agrega al state del array invitados.
//cuando se modifica el array invitados del state eso automaticamente 
// dispara que se pasen nuevas props al componente invitados.
//Cuadno el componente Invitados recibe las nuevas props, q es una nueva lista de invitados, 
// compara con la lista que tiene.
//A ver si cambia algun objeto, lo q cambia es que hay un nuevo objeto.
//Esta capacidad de React de leer que es lo que se modifica sin intervenir 
// el resto del documento es pq trabaja con el virtual Dom(no lo ves, react lo va preparando y compara con el dom real y solo renderiza lo que cambia)
export default class Main extends Component {
    // Lo que esta en state se la paso a invitados
    state= {
        invitados: [],
        // voy a crear un objeto que va a recibir los valores de los input
        //nuevoUsuario es un objeto temporario
        nuevoUsuario:{
            nombre:'',
            apellido: '',
            url: '',
            // le agrego esta propiedad para poder modificar la clase del objeto para poder tacharlo si es true.
            presente: false,
        }
    }
// En vez de tener una funcion para cada valor, hago todo en una funcion dinamica
// cada vez q agrego un caracter se activa esta funcion.
    leerInput = e => {
        // capturo el valor del input
        const valor = e.target.value
        // capturo la propiedad del input
        const propiedad = e.target.name
        this.setState({
            nuevoUsuario: {
                ...this.state.nuevoUsuario,
                // propiedad va entre corchetes pq es una propiedad dinamica ??????
                [propiedad]: valor
            }
        })
    }
// funcion que le paso a formulario
    agregarInvitado = e => {
        // tomo el id del ultimo elemento con un ternario para cuando invitados este vacio
        const nuevoId = this.state.invitados.length === 0 
        ? 1 
        : this.state.invitados[this.state.invitados.length-1].id + 1
        console.log(e.target.id)
        const usuarioACargar = {
                ...this.state.nuevoUsuario,
                id: nuevoId
            }
        
            // lo que esta aca va a ser el codigo que va a agregar un nuevo invitado a state
            this.setState({
            // ...this es el spread operator que llama a lo que ya tiene el array 
            invitados: [
                ...this.state.invitados,
                usuarioACargar],
                // vuelvo a dejar el objeto nuevoUsuario nuevamente como en su origen
                nuevoUsuario:{
                    nombre:'',
                    apellido: '',
                    url: '',
                    presente: false,
                }     
        })
    }

    // esta funcion se la tengo q pasar al hijo invitados para que se la pueda pasar al nieto invitado
    borrarInvitado = e => {
        // parseInt(parse es interpretar) transforma un string a numero o si hay otros caracteres
        // que no son string toma solo el n° hasta q encuentra otro caracter q no sea n°
        // le hago parseInt pq el id es un string 
        const idABorrar = parseInt(e.target.id)
        // modifico el state con un filter, para iterar invitados y retornar en el array solo los 
        // que sean != al id q quiero borrar
        this.setState({
            invitados: this.state.invitados.filter(invitados => invitados.id !== idABorrar)
        })
        // Cuando se actualiza el estado va a eliminar del array invitados el que yo borre,
        //el componente se vuelve a renderizar y a invitados le va a pasar una nueva prop con la 
        // nueva lista de invitados. Invitados la va a recibir va a comparar el virtual con el local dom y va
        // a detectar que determinado elemento ya no existe pq lo borre entonces el componente invitados actualiza el dom
        //borrando a ese objeto.   
    }

    asistioInvitado = e => {
        const idAModificar = parseInt(e.target.id)
        const copiaInvitados = [...this.state.invitados]
        copiaInvitados.map(invitado => {
            if(invitado.id === idAModificar) {
                invitado.vino = true
            }
        })
        this.setState({
            invitados: copiaInvitados      
        })
    }

    render() {
        console.log(this.state.nuevoUsuario)
        return (
            <div id="mainContainer">
                {/* le paso los invitados que saco de estado o state */}
                <Invitados invitados={this.state.invitados} 
                asistioInvitado={this.asistioInvitado} borrarInvitado={this.borrarInvitado} />
                {/* formulario recibe la funcion por props */}
                <Formulario agregarInvitado={this.agregarInvitado}
                //Le envio la prop nuevoUsuario al formulario(Bindeando o hacer un "two ways binding" o en criollo "limpiar campos de un input")
                //lo recibe el componente formulario  
                leerInput={this.leerInput} nuevoUsuario={this.state.nuevoUsuario}/>
            </div>
        )
    }
}
