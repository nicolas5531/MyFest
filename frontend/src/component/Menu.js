import React from 'react'
// NavLink tiene una sutil diferencia, me permite de forma mas facil saber en q pagina estoy
// toma una clase active en la pagina en la q estoy(sirve en menus para dejar en gris las pag en las q no estoy)
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <div id='mainContainer'>
            <Link to='/historia'>
                <button>Ir a historia</button>
            </Link>
            <Link to='/principal'>
                <button>Ir a principal</button>
            </Link>
        </div>
    )
}
