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
                    <Nav.Link href="/servicios/pedidos">Pedidos pendientes</Nav.Link>
                    <Nav.Link href="/servicios/pedidos">Mensajes pendientes</Nav.Link>
                    <Nav.Link href="/servicios/pedidos">Mensajes clientes</Nav.Link>
                </div>
            </div>
            <div className="cartera">
                <div className="TituloBorder">
                    <b><i>Cartera</i></b>
                </div>
                <div>
                    <Nav.Link href="/servicios/cartera">Depositar dinero</Nav.Link>
                    <Nav.Link href="/servicios/cartera">Extraer dinero</Nav.Link>
                    <Nav.Link href="/servicios/cartera">Historial</Nav.Link>
                    <Nav.Link href="/servicios/cartera">Publicidad</Nav.Link>
                </div>
            </div>
            <div className="configuracion">
                <div className="TituloBorder">
                    <b><i>Configuracion</i></b>
                </div>
                <div>
                    <Nav.Link href="/servicios/config">Mis datos</Nav.Link>
                    <Nav.Link href="/servicios/config">Seguridad</Nav.Link>
                    <Nav.Link href="/servicios/config">Privacidad</Nav.Link>
                </div>
            </div>
            <div className="ayuda">
                <div className="TituloBorder">
                    <b><i>Ayuda</i></b>
                </div>
                <div>
                    <Nav.Link href="/servicios/soporte">FAQ</Nav.Link>
                    <Nav.Link href="/servicios/soporte">About us</Nav.Link>
                    <Nav.Link href="/servicios/soporte">Contactos</Nav.Link>
                </div>
            </div>
        </div>
    );
};
export default Register;
