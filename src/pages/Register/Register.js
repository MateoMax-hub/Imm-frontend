import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Register = ({ setToken }) => {
  const [input, setInput] = useState({});
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/usuarios",
        input
      );
      localStorage.setItem("token", data);
      setToken(data)
      window.location = "./"
    } catch (error) {
      console.log("datos de error", error);
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
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              onChange={(e) => HandleChange(e)}
              name="nombre"
              type="text"
              placeholder="Nombre"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              onChange={(e) => HandleChange(e)}
              name="apellido"
              type="text"
              placeholder="Apellido"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => HandleChange(e)}
              name="email"
              type="email"
              placeholder="Email"
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
            <b>Register</b>
          </Button>
        </Form>
        <div className="mt-2">
          <a href="/login">Si ya tienes cuenta, click me</a>
        </div>
      </div>
    </div>
  );
};
export default Register;
