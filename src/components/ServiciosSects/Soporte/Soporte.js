import './Soporte.css';
import { Form, Button, Modal } from 'react-bootstrap';
import UseConsulta from '../../../UseForm/UseConsulta';
import { useState } from 'react';

function Soporte() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const { HandleSubmit, HandleChange } = UseConsulta();
    
    
    return (
        <div className="SoporteGeneral">
            <div className="w-100 m-2">
                <h3 className="text-center">
                    <b>
                        <i>Bienvenido al Area de Consultas y Ayuda</i>
                    </b>
                </h3>
            </div>
            <div className="Soporte">
                <div className="CardDeSoporte card">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Quien hace la consulta?</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                onChange={HandleChange}
                                placeholder="Nombre"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Cual es su apellido?</Form.Label>
                            <Form.Control
                                type="text"
                                name="apellido"
                                onChange={HandleChange}
                                placeholder="Apellido"
                            />
                        </Form.Group>
                        <Button className="btn btn-primary w-100" onClick={handleShow}>
                            Consulta
                        </Button>
                    </Form>
                </div>
                <div className="d-flex m-5">
                    <div>
                        <img
                            src="https://image.freepik.com/vector-gratis/personaje-dibujos-animados-call-center-service-hombre-usando-auriculares-pantalla-telefono-inteligente_52569-1124.jpg"
                            className="PhotoDeSoporte"
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <Modal className="modalDeSoporte" show={show} onHide={handleClose}>
                        <Modal.Header className="w-100" closeButton>
                            <Modal.Title className="text-center">
                                <i>Realice su Consulta aqui</i>
                            </Modal.Title>
                        </Modal.Header>
                        <div className="mt-2 ml-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Ayuda</Form.Label>
                                <input
                                    className="form-control w-75"
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
                                    cols="42"
                                    rows="10"
                                    name="descripcion"
                                    onChange={HandleChange}
                                    placeholder="Detalladamente en conflicto o su consulta aqui..."
                                ></textarea>
                            </Form.Group>
                        </div>
                        <Modal.Footer>
                            <Button variant="primary" onClick={HandleSubmit}>
                                Subir Consulta
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Soporte;
