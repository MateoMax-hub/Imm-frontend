import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BarraLateral.css';

const Register = () => {
    return (
        <div className="Barra">
            <div className="clientes">
                <div className="TituloBorder">
                    <b><i>Clientes</i></b>
                </div>
                <div>
                    <Nav.Link as={Link} to="/servicios/pedidos">Pedidos pendientes</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/pedidos">Mensajes pendientes</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/pedidos">Mensajes clientes</Nav.Link>
                </div>
            </div>
            <div className="cartera">
                <div className="TituloBorder">
                    <b><i>Cartera</i></b>
                </div>
                <div>
                    <Nav.Link as={Link} to="/servicios/cartera">Depositar dinero</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/cartera">Extraer dinero</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/cartera">Historial</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/cartera">Publicidad</Nav.Link>
                </div>
            </div>
            <div className="configuracion">
                <div className="TituloBorder">
                    <b><i>Configuracion</i></b>
                </div>
                <div>
                    <Nav.Link as={Link} to="/servicios/config">Mis datos</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/config">Seguridad</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/config">Privacidad</Nav.Link>
                </div>
            </div>
            <div className="ayuda">
                <div className="TituloBorder">
                    <b><i>Ayuda</i></b>
                </div>
                <div>
                    <Nav.Link as={Link} to="/servicios/soporte">FAQ</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/soporte">About us</Nav.Link>
                    <Nav.Link as={Link} to="/servicios/soporte">Contactos</Nav.Link>
                </div>
            </div>
        </div>
    );
};
export default Register;
