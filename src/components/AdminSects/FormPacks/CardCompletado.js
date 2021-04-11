import React from 'react';
import { Card, Button } from 'react-bootstrap'
import Base64Downloader from 'react-base64-downloader';

function CardCompletado({ pedido, handleShow, setDeleting }) {
    const deletePedido = () => {
        handleShow()
        setDeleting(pedido)
    }
    return (
        <>
            <Card className="m-2 cardPackDate">
                <Card.Img variant="top" src={pedido.segundaEtapa.img} />

                <Card.Footer className="d-flex justify-content-between">
                        <Button as={Base64Downloader} base64={pedido.segundaEtapa.img} downloadName={'ImmEditIMAGEN'} variant="primary">
                            Descargar foto
                        </Button>
                    <Button variant="danger" onClick={deletePedido}>
                        <i>Eliminar imagen</i>
                    </Button>
                </Card.Footer>
            </Card>
        </>
    );
}

export default CardCompletado;
