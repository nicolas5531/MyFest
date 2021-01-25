// rafc Componente funcional 
//su padre es Main
import React from 'react'
// Ahora cada invitado es un componente unico.
import { Invitado } from './Invitado'

export const Invitados = ({invitados, borrarInvitado, asistioInvitado}) => {
    return (
        <div>
            <h1>Invitados</h1>
            {/* tagg hr se usa para colocar una linea horizontal */}
            <hr />
            
            {invitados.map(invitado => {
                return <Invitado invitado={invitado}
                borrarInvitado={borrarInvitado}
                asistioInvitado={asistioInvitado} />
            })}


            {/* Aca todos los objetos que cargue van a constituir un solo componente, 
            tengo que modificarlo para que cree un componente por objeto o invitado cargado */}
            {/* {invitados.map(({nombre, apellido}) => {
                return <p>{nombre} {apellido}</p>
            })}
            */}

            {/* lo mismo que hacer sin destructurar...
                        {invitados.map(invitado => {
                return <p>{invitado.nombre} {invitado.apellido}} </p>
            })}
             */}
        </div>
    )
}
