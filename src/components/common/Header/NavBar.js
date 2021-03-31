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
                                <div className="d-flex m-2">
                                    <div>
                                        <Button as={Link} to="/servicios/cartera" variant="outline-primary">
                                            <i>$ {card} arg</i>
                                        </Button>
                                    </div>
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
                                                </svg>{' '}
                                                de <i>{user}</i>
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
