import { Nav } from 'react-bootstrap';
import './BarraLateral.css';

const Register = () => {
    return (
        <div className="Barra">
            <div className="clientes">
                <div className="TituloBorder">
                    <b><i>Clientes</i></b>
                </div>
                <div>
                    <Nav.Link href="#home">Pedidos pendientes</Nav.Link>
                    <Nav.Link href="#home">Mensajes pendientes</Nav.Link>
                    <Nav.Link href="#home">Mensajes clientes</Nav.Link>
                </div>
            </div>
            <div className="cartera">
                <div className="TituloBorder">
                    <b><i>Cartera</i></b>
                </div>
                <div>
                    <Nav.Link href="#home">Depositar dinero</Nav.Link>
                    <Nav.Link href="#home">Extraer dinero</Nav.Link>
                    <Nav.Link href="#home">Historial</Nav.Link>
                    <Nav.Link href="#home">Publicidad</Nav.Link>
                </div>
            </div>
            <div className="configuracion">
                <div className="TituloBorder">
                    <b><i>Configuracion</i></b>
                </div>
                <div>
                    <Nav.Link href="#home">Mis datos</Nav.Link>
                    <Nav.Link href="#home">Seguridad</Nav.Link>
                    <Nav.Link href="#home">Privacidad</Nav.Link>
                </div>
            </div>
            <div className="ayuda">
                <div className="TituloBorder">
                    <b><i>Ayuda</i></b>
                </div>
                <div>
                    <Nav.Link href="#home">FAQ</Nav.Link>
                    <Nav.Link href="#home">About us</Nav.Link>
                    <Nav.Link href="#home">Contactos</Nav.Link>
                </div>
            </div>
        </div>
    );
};
export default Register;
