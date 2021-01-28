import React from 'react'
import { Link } from 'react-router-dom'

// Si hago un consoleLog de las props, puedo ver las que puedo utilizar como push 
export const HistoriaAntigua = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Historia Antigua</h2>
            <Link to='/historia'>
                <button>Ir a historia</button>
            </Link>
            <Link to='/principal'>
                <button>Ir a principal</button>
            </Link>
        </div>
    )
}
