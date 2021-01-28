//"rafc" este es un componente funcional porque solo va a renderizar algo
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <h3 className='headerTitle'>Welcome to my party</h3>
            <div>
            {/* NavLink tiene la class active por defecto cuando estoy en la ruta, la cual puedo modif los estilos */}
            <NavLink to='/historia'>
                Ir a historia
            </NavLink>
            <NavLink to='/principal'>
                Ir a principal
            </NavLink>
            </div>
        </header>
    )
}
