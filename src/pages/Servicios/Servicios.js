import React from 'react'
import BarraLateral from '../../components/BarraLateral/BarraLateral';


function Servicios({ token }) {
    return (
        <div className="d-flex">
            {token && (
                <div>
                    <BarraLateral />
                </div>
            )}
            <div>Hola sou Home</div>
        </div>
    )
}

export default Servicios
