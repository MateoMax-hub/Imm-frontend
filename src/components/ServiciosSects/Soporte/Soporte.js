import './Soporte.css';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import UseConsulta from '../../../UseForm/UseConsulta';
import { useState } from 'react';
import BarraLateral from '../../BarraLateral/BarraLateral';

function Soporte() {
    const {
        HandleSubmit,
        HandleChange,
        handleShow,
        handleClose,
        show,
        tituloVal,
        consultaVal,
    } = UseConsulta();

    return (
        <>
            <div className="barraLateral">
                <BarraLateral />
            </div>
            <div className="SoporteGeneral w-100 mt-5">
                <div className="w-100">
                    <h3 className="text-center">
                        <b>
                            <i>Bienvenido al Area de Consultas y Ayuda</i>
                        </b>
                    </h3>
                </div>
                <div className="Soporte">
                    <div>
                        <Form className="CardDeSoporte card">
                            <Form.Group>
                                <Form.Label>Ayuda</Form.Label>
                                <input
                                    maxLength="20"
                                    className="form-control w-100"
                                    name="titulo"
                                    onChange={HandleChange}
                                    type="text"
                                    placeholder="Describa el conflicto o consulta que tenga"
                                />
                            </Form.Group>
                            {tituloVal === true && (
                                <Alert className="text-danger">
                                    Tienes que escribir un titulo para tu consulta!
                                </Alert>
                            )}
                            <Form.Group>
                                <Form.Label>Especificacion</Form.Label>
                                <textarea
                                    maxLength="400"
                                    cols="34"
                                    rows="10"
                                    name="descripcion"
                                    onChange={HandleChange}
                                    placeholder="Detalladamente en conflicto o su consulta aqui..."
                                ></textarea>
                            {consultaVal === true && (
                                <Alert className="text-danger">
                                    Tienes que escribir una consulta!
                                </Alert>
                            )}
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
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <b>
                                <i>Tu consulta fue recibida, muchas gracias!!</i>
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
        </>
    );
}

export default Soporte;
