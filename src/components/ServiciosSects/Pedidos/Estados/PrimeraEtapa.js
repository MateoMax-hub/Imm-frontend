import React from 'react'
import { Button } from 'react-bootstrap'
import "../pedidos.css"

function PrimeraEtapa() {
    return (
        <div className="w-75 d-flex align-items-center">
            <div className="d-flex flex-column justify-content-center align-content-center">

            <p className="etapas-p-font m-0">El editor esta esperando que le envies tu foto para trabajar con ella!</p>
            <div className="d-flex justify-content-center align-content-center">
                <Button variant="info">Enviar foto</Button>
            </div>
            </div>
        </div>
    )
}

export default PrimeraEtapa
