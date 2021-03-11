import { Navbar, Nav, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setRoutes, token }) => {
    const [user, Setuser] = useState('');

    useEffect(() => {
        if (token) {
            nombre();
        }
    }, [token]);

    const nombre = async () => {
        try {
            const headers = { 'x-auth-token': token };
            const { data } = await axios.get('http://localhost:4000/api/usuarios', {
                headers,
            });
            Setuser(data.nombre);
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };
    return (
        <div>
            <Navbar bg="info" variant="dark">
                <Navbar.Brand>
                    <b>
                        <i>Logo</i>
                    </b>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => setRoutes('home')}>
                            <b>Home</b>
                        </Nav.Link>
                        {!token && (
                            <Nav.Link onClick={() => setRoutes('login')}>
                                <b>Iniciar</b>
                            </Nav.Link>
                        )}
                        {!token && (
                            <Nav.Link onClick={() => setRoutes('register')}>
                                <b>Register</b>
                            </Nav.Link>
                        )}
                    </Nav>
                    {token && (
                        <div>
                            <b className="m-2">
                                <i>{user}</i>
                            </b>
                            <Button onClick={handleLogOut} size="sm" variant="dark">
                                Cerrar sesion
                            </Button>
                        </div>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default Login;
