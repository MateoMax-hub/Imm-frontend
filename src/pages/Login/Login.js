import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

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
        <div className="formulario">
            <div className="DentroDeForm">
                <Form onSubmit={HandleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={(e) => HandleChange(e)}
                            name="email"
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            onChange={(e) => HandleChange(e)}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>
                    <Button className="btn btn-primary w-100" type="submit">
                        <b> Iniciar Sesion</b>
                    </Button>
                </Form>
                <div className="mt-2">
                    <a href="/register">aun no tienes cuenta, registrate ahora mismo?</a>
                </div>
            </div>
        </div>
    );
};
export default Login;
