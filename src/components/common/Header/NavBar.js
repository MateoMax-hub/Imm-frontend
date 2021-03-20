import { Navbar, Nav, Button, Form, Dropdown, FormControl } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Cartera from '../../Cartera/Cartera';
import axios from 'axios';

const Login = ({ token }) => {
    const [user, Setuser] = useState('');
    const [rol, SetRol] = useState('usuario')
    const isAdmin = rol === "admin"

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
            SetRol(data.rol)
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
            <Navbar bg="dark" variant="dark">
                <Navbar.Collapse className="navBar" id="basic-navbar-nav">
                    <div>
                        <Nav className="mr-auto">
                            <Form inline>
                                <Button variant="success" as={Link} to="/">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="bi bi-house"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                                        />
                                    </svg>
                                </Button>
                                <FormControl type="text" placeholder="Search" className="" />
                            </Form>
                        </Nav>
                    </div>
                    <div>
                        <Navbar.Brand>
                            <b>
                                <i>IMMEDIT</i>
                            </b>
                        </Navbar.Brand>
                    </div>
                    <div className="d-flex">
                        <div className="ml-2">
                            {!token && (
                                <Button as={NavLink} to="/login">
                                    <b>Ingresar</b>
                                </Button>
                            )}
                        </div>
                        <div className="ml-2">
                            {!token && (
                                <Button as={NavLink} to="/register">
                                    <b>Registrarse</b>
                                </Button>
                            )}
                        </div>
                        {token && (
                            <div className="d-flex ml-2">
                                <Cartera />
                                <div className="ml-2">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="23"
                                                height="23"
                                                fill="currentColor"
                                                class="bi bi-person"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg> de <i>{user}</i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/servicios">Perfil</Dropdown.Item>
                                            <Dropdown.Item href="/servicios">Pedidos</Dropdown.Item>
                                            <Dropdown.Item href="/servicios">Configuraciones</Dropdown.Item>
                                            <Dropdown.Item href="/servicios">Soporte</Dropdown.Item>
                                            {isAdmin && (<Dropdown.Item href="/admin/users">Pagina admin</Dropdown.Item>)}
                                            <Dropdown.Item onClick={handleLogOut}>
                                                Cerrar sesion
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        )}
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default Login;
