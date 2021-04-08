import './Soporte.css';
import { Form, Button, Modal } from 'react-bootstrap';
import UseConsulta from '../../../UseForm/UseConsulta';
import { useState } from 'react';

function Soporte() {
    const { HandleSubmit, HandleChange, handleShow, handleClose, show } = UseConsulta();

    return (
        <div className="SoporteGeneral">
            <div className="w-100">
                <h3 className="text-end">
                    <b>
                        <i>Bienvenido al Area de Consultas y Ayuda</i>
                    </b>
                </h3>
            </div>
            <div className="Soporte">
                <div className="w-100">
                    <Form className="CardDeSoporte card">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ayuda</Form.Label>
                            <input
                                className="form-control w-100"
                                name="titulo"
                                onChange={HandleChange}
                                type="text"
                                placeholder="Describa el conflicto o consulta que tenga"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Especificacion</Form.Label>
                            <textarea
                                name=""
                                id=""
                                cols="40"
                                rows="10"
                                name="descripcion"
                                onChange={HandleChange}
                                placeholder="Detalladamente en conflicto o su consulta aqui..."
                            ></textarea>
                        </Form.Group>
                        <Button className="btn btn-primary w-100" onClick={HandleSubmit}>
                            Consulta
                        </Button>
                    </Form>
                </div>
                <div className="d-flex ml-2">
                    <div>
                        <img
                            src="https://image.freepik.com/vector-gratis/personaje-dibujos-animados-call-center-service-hombre-usando-auriculares-pantalla-telefono-inteligente_52569-1124.jpg"
                            className="PhotoDeSoporte"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <b>
                                <i>Tu consulta fue recibida, muchas gracias!! ;)</i>
                            </b>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Soporte;
