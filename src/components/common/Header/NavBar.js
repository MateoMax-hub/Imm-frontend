import { Navbar, Nav, Button, Form, Dropdown, FormControl, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import UseCard from '../../../UseForm/UseCard';
import { useState, useEffect } from 'react';

const Login = ({ token }) => {
    const { isAdmin, handleLogOut, user, card } = UseCard({ token });
    return (
        <div>
            <Navbar bg="dark" expand="lg" className="search">
                <div>
                    <Navbar.Brand as={Link} to="/">
                        <b className="text">
                            <i>I M M E D I T</i>
                        </b>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Form inline>
                        <div className="d-flex">
                            <div className="m-2">
                                {!token && (
                                    <Button as={NavLink} to="/login">
                                        <b>Ingresar</b>
                                    </Button>
                                )}
                            </div>
                            <div className="m-2">
                                {!token && (
                                    <Button as={NavLink} to="/register">
                                        <b>Registrarse</b>
                                    </Button>
                                )}
                            </div>
                            {token && (
                                <div className="d-flex opcionts">
                                    <div>
                                        <Button as={Link} to="/servicios/cartera" variant="outline-primary">
                                            <i><b>${card} Arg</b></i>
                                        </Button>
                                    </div>
                                    <div className="ml-2">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                                <i><b>{user} </b></i>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    fill="currentColor"
                                                    class="bi bi-person-circle"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                                    />
                                                </svg>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="/perfil">Perfil</Dropdown.Item>
                                                <Dropdown.Item href="/servicios/pedidos">
                                                    Pedidos
                                                </Dropdown.Item>
                                                <Dropdown.Item href="/servicios/config">
                                                    Configuraciones
                                                </Dropdown.Item>
                                                <Dropdown.Item href="/servicios/soporte">
                                                    Soporte
                                                </Dropdown.Item>
                                                {isAdmin && (
                                                    <Dropdown.Item href="/admin/users">
                                                        Pagina admin
                                                    </Dropdown.Item>
                                                )}
                                                <Dropdown.Item onClick={handleLogOut}>
                                                    Cerrar sesion
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default Login;
