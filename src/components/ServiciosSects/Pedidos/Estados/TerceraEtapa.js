import React from 'react'
import { Button } from 'react-bootstrap'
import '../pedidos.css'

function TerceraEtapa() {
    return (
        <div className="w-75 d-flex align-items-center">
            <div className="d-flex flex-column justify-content-center align-content-center">

            <p className="etapas-p-font m-0">La edicion de tu foto esta lista y puedes descargarla!, no olvides dejar un comentario</p>
            <div className="d-flex justify-content-center align-content-center pt-2">
                <Button variant="info">Descargar foto</Button>
                <Button variant="outline-info" className="ml-2">Dejar comentario</Button>
            </div>
            </div>
        </div>
    )
}

export default TerceraEtapa
