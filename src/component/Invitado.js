// componente funcional hijo de invitados
import React, { useState } from 'react'

export const Invitado = ({invitado, borrarInvitado, asistioInvitado}) => {
    // deconstruccion de invitado
    const {nombre, apellido, url, id, vino} = invitado
    // Ver pq se hizo??????????????????????????????????????
    const [visible, setVisible] = useState(false)
    console.log(id)
    // Creo un identificador para poder darle un valor unico a cada componente invitado
    return (
        <>
            <div className='invitado'>
                <div className='fotoInvitado'
                style={{
                    backgroundImage: `url(${url})`
                }}></div>
                {/* le agrego el condicional en el classname para decir que
                si la propiedad vino es true entonces la clase es presente */}
                <h4 className={`${vino && 'presente'}`}>{nombre} {apellido}</h4>
                {/* cuando se haga click cambia a lo contrario de visible */}
                <button onClick={() => setVisible(!visible)}>
                    {visible ? 'Ocultar' : 'Ver opciones'}
                </button>
            </div>
            {/* es como un ternario pero solo usa el if sin else */}
            {visible &&
            (
                // uso fragment para retornar mas de un elemento
            <>    
                <button onClick={asistioInvitado} id={id}>Asistió</button>
                <button onClick={borrarInvitado} id={id}
                >No asistió</button>
            </>)}
        </>    
        
    )
    
}
