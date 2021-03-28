import React from 'react';
import { Button } from 'react-bootstrap';

function EtapasCompletadas() {
    return (
        <div className="w-75 d-flex align-items-center">
            <div className="d-flex flex-column justify-content-center align-content-center">
                <p className="etapas-p-font m-0">
                    Gracias por dejar un comentario sobre la foto, puedes volverla a descargar si quieres!
                </p>
                <div className="d-flex justify-content-center align-content-center pt-2">
                    <Button variant="info">Descargar foto</Button>
                </div>
            </div>
        </div>
    );
}

export default EtapasCompletadas;
