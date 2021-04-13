import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import Base64Downloader from 'react-base64-downloader';

function DownLoad({ masInfo }) {
    if (masInfo.primeraEtapa.estado === "pendiente"){
        return (<></>)
    } else {
        return (
            <Modal.Footer>
                <Button
                    as={Base64Downloader}
                    base64={masInfo.primeraEtapa.img}
                    downloadName={'ImmEditIMAGEN'}
                    variant="info"
                >
                    Descargar foto
                </Button>
            </Modal.Footer>
        );

    }
}

export default DownLoad;
