import React from 'react'
import { Link } from 'react-router-dom'

export const Historia = () => {
    return (

        <div>
            <h1>HISTORIA</h1>
            <Link to="/historia/antigua">
                <button>Historia antigua</button>
            </Link>
            <Link to='/principal'>
                <button>Ir a principal</button>
            </Link>

        </div>
    )
}
