import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setToken }) => {
    const [input, setInput] = useState({});
    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('auth', input);
            localStorage.setItem('token', data);
            setToken(data);
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    };

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    return (
        <div className="bodyDeLogin">
            <div className="formulario">
                <div className="DentroDeForm">
                    <div className="w-100">
                        <h3>
                            <i>
                                <b>Bienvenido a Immedit Inicie Sesion</b>
                            </i>
                        </h3>
                    </div>
                    <hr className="bg-light" />
                    <Form className="mt-5" onSubmit={HandleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                <b>Correo electrónico</b>
                            </Form.Label>
                            <Form.Control
                                onChange={(e) => HandleChange(e)}
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>
                                <b>Contraseña</b>
                            </Form.Label>
                            <Form.Control
                                onChange={(e) => HandleChange(e)}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button className="btn btn-primary mt-2" type="submit">
                            <b>Iniciar Sesion</b>
                        </Button>
                    </Form>
                    <div className="mt-2">
                        <a href="/register" className="list-unstyled">
                            aun no tienes cuenta, registrate ahora mismo?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
