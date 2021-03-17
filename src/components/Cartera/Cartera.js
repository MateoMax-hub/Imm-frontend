import { Button, Modal, Dropdown } from 'react-bootstrap';
import usuario from '../../json/usuarios.json';
import { useState, useEffect } from 'react';

const Cartera = () => {
    const [cartera, setCartera] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        setCartera(usuario[0]);
    }, []);
    console.log(usuario[0]);
    return (
        <div>
            <Button variant="outline-success" onClick={handleShow}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-cash"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                </svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className="text-center">
                        <b><i>{cartera.nombre} {cartera.apellido}</i></b>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-center ml-2">
                        <thead className="card-header rounded m-2 p-2">
                            <tr>
                                <th>${cartera.balance} arg</th>
                            </tr>
                        </thead>
                        <div className="m-2">
                            <button className="btn btn-info">Depositar</button>
                        </div>
                        <div className="m-2">
                            <button className="btn btn-info">Retirar</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end m-2">
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    <i>filtrar</i>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/servicios">Por Nombre</Dropdown.Item>
                                    <Dropdown.Item href="/servicios">Por Fecha</Dropdown.Item>
                                    <Dropdown.Item href="/servicios">Por Precio</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="d-flex m-2">
                        <div className="mr-2">
                            <i>Historial:</i>
                        </div>
                        <div className="card w-100 p-2">
                            <p>historial...</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default Cartera;
