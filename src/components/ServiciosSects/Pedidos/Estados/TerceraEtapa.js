import { React, useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../pedidos.css';
import axios from 'axios';


function TerceraEtapa(props) {


    const { pedido, getPedidos } = props;

    // react Bootstrap modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // enviar comentario
    const [comment, setComment] = useState('');
    useEffect(() => {
        if (!show) {
            setComment('');
        }
    }, [show]);

    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setComment(value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        const body = {
            terceraEtapa: {
                comment,
            },
        };
        const { data } = await axios.put(`pedidos/tercera/${pedido._id}`, body, {
            headers,
        });
        getPedidos();
        setShow(false);
    };

    return (
        <>
            <div className="w-75 d-flex align-items-center">
                <div className="d-flex flex-column justify-content-center align-content-center">
                    <p className="etapas-p-font m-0">
                        La edicion de tu foto esta lista y puedes descargarla!, no olvides dejar un comentario
                    </p>
                    <div className="d-flex justify-content-center align-content-center pt-2">
                        <Button variant="info">Descargar foto</Button>
                        <Button variant="outline-info" className="ml-2" onClick={handleShow}>
                            Dejar comentario
                        </Button>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Deja un comentario para tu editor!</Modal.Body>
                <form onSubmit={handleSubmit}>
                    <Modal.Footer className="d-flex justify-content-center">
                        <textarea
                            placeholder="Comentario"
                            className="comentario-pedido-ta"
                            name="comment"
                            onChange={(e) => handleChange(e)}
                        ></textarea>
                    </Modal.Footer>
                    <Modal.Footer className="d-flex justify-content-center">
                        <Button variant="outline-info" type="submit">
                            Enviar comentario
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default TerceraEtapa;
