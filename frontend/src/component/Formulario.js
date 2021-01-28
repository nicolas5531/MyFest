// rafc Componente funcional 
//su padre es Main
import React from 'react'
// la funcion agregar invitado va entre {} pq destructuro
export const Formulario = ({agregarInvitado, leerInput, nuevoUsuario}) => {
    return (
        <div id="formulario">
            <h4>Ingresa nuevo invitado</h4>
            <input type="text" name="nombre"
             autoComplete="off" placeholder="Ingresa el nombre"
             onChange={leerInput}
            //al agregar este value, estoy Bindeando o hacer un "two ways binding" o en criollo "limpiar campos de un input"
             value={nuevoUsuario.nombre}/>

            <input type="text" name="apellido"
             autoComplete="off" placeholder="Ingresa el apellido" 
             onChange={leerInput}
             value={nuevoUsuario.apellido}/>
             
             <select name='sexo' id='sexo' onChange={leerInput}>
                 {/* tiene que tener una option por defecto para q funcione. hay que dejarla por defecto(selected) y no seleccionable  */}
                    <option value='' disabled='true' selected> </option>
                    <option value='H'>Hombre</option>
                    <option value='M'>Mujer</option>
             </select>
            {/* porq al ponerle foto al name no puedo ver lo q escribo en el input */}
            {/* <input type="text" name="url"
             autoComplete="off" placeholder="Ingresa link o url de la foto" 
             onChange={leerInput}
             value={nuevoUsuario.url}/> */}
{/* el boton recibe la funcion q no lleva this pq es un componente funcional */}
            <button onClick={agregarInvitado}>Enviar</button> 
        </div>
    )
}
