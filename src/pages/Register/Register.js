import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = ({ setToken }) => {
    const [validated, setValidated] = useState(false);
    const [validation, setValidation] = useState(false);
    const [buttonVista, setButtonVista] = useState('password');
    const [habilitar, setHabilitar] = useState('disabled');
    const [input, setInput] = useState({});
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
        try {
            const { data } = await axios.post('usuarios', input);
            localStorage.setItem('token', data);
            setToken(data);
            window.location = './';
        } catch (error) {
            setValidation(true);
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
                    <Form className="mt-5" onSubmit={HandleSubmit} noValidate validated={validated}>
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
                                maxLength="12"
                            />
                            {validation === true && (
                                <Alert className="text-danger">
                                    Tiene que tener 12 caracteres como maximo!
                                </Alert>
                            )}
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
                                maxLength="12"
                            />
                            {validation === true && (
                                <Alert className="text-danger">
                                    Tiene que tener 12 caracteres como maximo!
                                </Alert>
                            )}
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
                                maxLength="40"
                            />
                            {validation === true && (
                                <Alert className="text-danger">
                                    Tiene que tener 40 caracteres como maximo!!
                                </Alert>
                            )}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" md="4" controlId="validationCustom01">
                            <Form.Label>
                                <b>Contraseña</b>
                            </Form.Label>
                            <div className="d-flex">
                                <Form.Control
                                    required
                                    onChange={(e) => HandleChange(e)}
                                    name="password"
                                    type={buttonVista}
                                    placeholder="Password"
                                    maxLength="10"
                                    minLength="5"
                                />
                                <div>
                                    <button type="button" onClick={() => setButtonVista('text')} className="btn btn-primary">O</button>
                                </div>
                            </div>
                            {validation === true && (
                                <Alert className="text-danger">
                                    Tiene que tener entre 5 y 15 caracteres!!
                                </Alert>
                            )}
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                required
                                label="Debe aceptar las condiciones"
                                feedback="Acepto terminos y condiciones de uso."
                                onClick={() => setHabilitar('')}
                            />
                        </Form.Group>
                        <Button className="btn btn-primary w-100" disabled={habilitar} type="submit">
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
