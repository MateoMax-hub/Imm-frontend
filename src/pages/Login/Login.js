import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setToken }) => {
    const [validated, setValidated] = useState(false);
    const [validation, setValidation] = useState(false);
    const [input, setInput] = useState({});
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
        try {
            const { data } = await axios.post('auth', input);
            localStorage.setItem('token', data);
            setToken(data);
            window.location.href = '/';
        } catch (error) {
            setValidation(true)
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
                    <Form className="mt-5" onSubmit={HandleSubmit} noValidate validated={validated}>
                        <Form.Group controlId="formBasicEmail" md="4" controlId="validationCustom01">
                            <Form.Label>
                                <b>Correo electrónico</b>
                            </Form.Label>
                            <Form.Control
                                onChange={(e) => HandleChange(e)}
                                required
                                name="email"
                                type="email"
                                placeholder="Enter email"
                            />
                            {validation === true && <Alert className="text-danger">Datos erroneos, revise su correo!</Alert>}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" md="4" controlId="validationCustom02">
                            <Form.Label>
                                <b>Contraseña</b>
                            </Form.Label>
                            <Form.Control
                                onChange={(e) => HandleChange(e)}
                                required
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                            {validation === true && <Alert className="text-danger">Datos erroneos, revise su contraseña!</Alert>}
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
