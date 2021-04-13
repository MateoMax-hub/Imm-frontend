import { Navbar, Nav, Button, Form, Dropdown, FormControl, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import UseCard from '../../../UseForm/UseCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = ({ token }) => {
    const { isAdmin, handleLogOut, user, card, nombre } = UseCard({ token });

    useEffect(() => {
        valToken()
    }, [])

    const valToken = async () => {
        const tokenExistanse = localStorage.getItem('token')
        if (tokenExistanse){
            const headers = { "x-auth-token": token }
            const { data } = await axios.post('/usuarios/valToken', {}, {headers})
            if (!data){
                localStorage.removeItem('token')
                window.location.reload()
            }
        }
    }

    return (
        <div className="sticky-top">
            <Navbar expand="lg" className="search">
                <Navbar.Brand as={Link} to="/">
                    <b className="text">
                        <i>I M M E D I T</i>
                    </b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {token && (
                    <Navbar.Collapse className="w-100" id="basic-navbar-nav" className="navbarDisplay">
                        <Nav className="mr-auto">
                            <Nav.Link className="text-light" href="/servicios/pedidos">
                                <i>Pedidos</i>
                            </Nav.Link>
                            <Nav.Link className="text-light" href="/servicios/config">
                                <i>Configuraciones</i>
                            </Nav.Link>
                            <Nav.Link className="text-light" href="/servicios/soporte">
                                <i>Soporte</i>
                            </Nav.Link>
                            <Nav.Link className="text-light" href="/servicios/cartera">
                                <i>Cartera</i>
                            </Nav.Link>
                        </Nav>

                        <Nav className="d-flex justify-content-right">
                            <div className="d-flex">
                                <div className="opcionts">
                                    <div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                <i>
                                                    <b>{user} </b>
                                                </i>
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
                                            <Dropdown.Menu className="NavbarRight">
                                                <Dropdown.Item href="/perfil">Perfil</Dropdown.Item>
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
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                )}
                {!token && (
                    <Navbar.Collapse className="NavSesion">
                        <div className="d-flex">
                            <div className="m-2">
                                <Button variant="light" as={NavLink} to="/login">
                                    <b>Ingresar</b>
                                </Button>
                            </div>
                            <div className="m-2">
                                <Button variant="light" as={NavLink} to="/register">
                                    <b>Registrarse</b>
                                </Button>
                            </div>
                        </div>
                    </Navbar.Collapse>
                )}
            </Navbar>
        </div>
    );
};
export default Login;
