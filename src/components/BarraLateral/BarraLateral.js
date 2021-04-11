import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BarraLateral.css';
import { useState } from 'react';

const Register = () => {
    const [button, setButton] = useState(0);
    const [displayButton, setDisplayButton] = useState('');
    const [displayClientes, setDisplayClientes] = useState('comiteButton');
    const Submit = () => {
        if (button === 0) {
            setButton(1);
            setDisplayClientes('');
            setDisplayButton('comiteButton');
        } else {
            setButton(0);
            setDisplayButton('');
            setDisplayClientes('comiteButton');
        }
    };
    return (
        <div>
            <div className={displayClientes}>
                <button onClick={Submit} className="m-2 btn btn-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-border-width"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
            <div className={displayButton}>
                <div className="Barra">
                    <div className="clientes">
                        <div className="TituloBorder" onClick={Submit}>
                            <b>
                                <i>Clientes</i>
                            </b>
                        </div>
                        <div>
                            <Nav.Link as={Link} to="/servicios/pedidos">
                                Pedidos pendientes
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/pedidos">
                                Mensajes pendientes
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/pedidos">
                                Mensajes clientes
                            </Nav.Link>
                        </div>
                    </div>
                    <div className="cartera">
                        <div className="TituloBorder">
                            <b>
                                <i>Cartera</i>
                            </b>
                        </div>
                        <div>
                            <Nav.Link as={Link} to="/servicios/cartera">
                                Depositar dinero
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/cartera">
                                Extraer dinero
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/cartera">
                                Historial
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/cartera">
                                Publicidad
                            </Nav.Link>
                        </div>
                    </div>
                    <div className="ayuda">
                        <div className="TituloBorder">
                            <b>
                                <i>Configuracion</i>
                            </b>
                        </div>
                        <div>
                            <Nav.Link as={Link} to="/servicios/config">
                                Mis datos
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/config">
                                Seguridad
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/config">
                                Privacidad
                            </Nav.Link>
                        </div>
                    </div>
                    <div className="ayuda">
                        <div className="TituloBorder">
                            <b>
                                <i>Ayuda</i>
                            </b>
                        </div>
                        <div>
                            <Nav.Link as={Link} to="/servicios/soporte">
                                FAQ
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/soporte">
                                About us
                            </Nav.Link>
                            <Nav.Link as={Link} to="/servicios/soporte">
                                Contactos
                            </Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
