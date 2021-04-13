import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = ({ setToken }) => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    const [input, setInput] = useState({});
    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(input);
        try {
            const { data } = await axios.post('usuarios', input);
            localStorage.setItem('token', data);
            setToken(data);
            window.location = './';
        } catch (error) {
            console.log('datos de error', error);
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
                        <h1 className="text-center">
                            <b>Registro</b>
                        </h1>
                    </div>
                    <hr className="bg-light" />
                    <Form
                        className="mt-5"
                        onSubmit={HandleSubmit}
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group controlId="formBasicEmail" md="4" controlId="validationCustom01">
                            <Form.Label>
                                <b>Nombre</b>
                            </Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => HandleChange(e)}
                                name="nombre"
                                type="text"
                                placeholder="Nombre"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" md="4" controlId="validationCustom01">
                            <Form.Label>
                                <b>Apellido</b>
                            </Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => HandleChange(e)}
                                name="apellido"
                                type="text"
                                placeholder="Apellido"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" md="4" controlId="validationCustom01">
                            <Form.Label>
                                <b>Email</b>
                            </Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => HandleChange(e)}
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" md="4" controlId="validationCustom01">
                            <Form.Label>
                                <b>Contraseña</b>
                            </Form.Label>
                            <Form.Control
                                required
                                onChange={(e) => HandleChange(e)}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button className="btn btn-primary w-100" type="submit">
                            <b>Register</b>
                        </Button>
                    </Form>
                    <div className="mt-2">
                        <a href="/login">Si ya tienes cuenta, click me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
