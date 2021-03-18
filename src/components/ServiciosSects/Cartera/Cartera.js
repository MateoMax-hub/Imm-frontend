import { Button, Modal, Dropdown } from 'react-bootstrap';
import usuario from '../../../json/usuarios.json';
import { useState, useEffect } from 'react';

function Cartera() {
    const [cartera, setCartera] = useState(0);
    useEffect(() => {
        setCartera(usuario[0]);
    }, []);
    return (
        <div className="w-100 mt-2">
            <div className="text-center">
                <b>
                    <i>
                        {cartera.nombre} {cartera.apellido}
                    </i>
                </b>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
                <thead className="d-flex align-items-center bg-dark text-white card-header rounded m-2 p-10">
                    <tr>
                        <th>${cartera.balance} arg</th>
                    </tr>
                </thead>
                <div>
                    <div className="m-2">
                        <button className="btn btn-outline-dark"><b>Depositos</b></button>
                    </div>
                    <div className="m-2">
                        <button className="btn btn-outline-dark"><b>Cobranzas</b></button>
                    </div>
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
                <div className="card w-100 p-2 h-100">
                    <i>historial...</i>
                </div>
            </div>
        </div>
    );
}

export default Cartera;
