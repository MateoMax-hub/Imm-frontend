import { Dropdown, Form } from 'react-bootstrap';
import UseCard from '../../../UseForm/UseCard';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Cartera({ token }) {
    const [depo, setDepo] = useState({balance: 0});
    const { card, user, lastName } = UseCard({ token });

    const Valor = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...depo, [name]: value };
        setDepo(changedInput);
    };
    const DepositoBalance = async () => {
        try {
            const headers = { 'x-auth-token': token };
            await axios.put('http://localhost:4000/api/usuarios/cartera', depo, { headers });
            window.location.reload();
            alert('Deposito realizado con exito');
        } catch (error) {
            console.log(error);
        }
    };
    const ExtractBalance = async () => {
        try {
            const headers = { 'x-auth-token': token };
            await axios.put('http://localhost:4000/api/usuarios', depo, { headers });
            window.location.reload();
            alert('Deposito realizado con exito');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="card mt-2">
            <div className="w-100  mt-2 d-flex justify-content-center align-items-center">
                <b>
                    <i>
                        {user} {lastName}
                    </i>
                </b>
            </div>
            <hr />
            <div className="">
                <div className="d-flex justify-content-around">
                    <thead className="d-flex align-items-center bg-dark text-white card-header rounded m-2 p-10">
                        <tr>
                            <th>$ {card} arg</th>
                        </tr>
                    </thead>
                    <div>
                        <div className="m-2">
                            <button onClick={DepositoBalance} className="btn btn-outline-dark">
                                <b>Depositos</b>
                            </button>
                        </div>
                        <div className="m-2">
                            <button onClick={ExtractBalance} className="btn btn-outline-dark">
                                <b>Cobranzas</b>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end m-2">
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                <i>filtrar</i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/servicios">Por Nombre</Dropdown.Item>
                                <Dropdown.Item href="/servicios">Por Fecha</Dropdown.Item>
                                <Dropdown.Item href="/servicios">Por Precio</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Historial</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>respuesta...</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Form>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Balance</Form.Label>
                    <Form.Control
                        name="balance"
                        onChange={(e) => Valor(e)}
                        type="number"
                        placeholder="new balans..."
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Cartera;
