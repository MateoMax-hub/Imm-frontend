import { Dropdown, Form, Modal, Button } from 'react-bootstrap';
import UseCard from '../../../UseForm/UseCard';
import Tarjet from './Target';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Cartera({ token }) {
    const [depo, setDepo] = useState({ balance: 0 });
    const { card, user, lastName } = UseCard({ token });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <button onClick={handleShow} className="btn btn-outline-dark">
                                <b>Depositos</b>
                            </button>
                        </div>
                        <div className="m-2">
                            <button onClick={handleShow} className="btn btn-outline-dark">
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
            <div className="d-flex">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>Deposito</Modal.Body>

                    <Modal.Footer className="d-flex justify-content-center">
                        <Form>
                            <Form.Group className="card m-2" controlId="validationCustom02">
                                <Tarjet />
                                <div className="m-2">
                                    <div className="form-group col-md-12">
                                        <label>Ingresar importe para subir a la cuenta</label>
                                        <input
                                            name="balance"
                                            onChange={(e) => Valor(e)}
                                            type="number"
                                            placeholder="Ingresar saldo..."
                                            className="w-100 form-control"
                                        />
                                    </div>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </div>
                            </Form.Group>
                        </Form>
                    </Modal.Footer>
                    <Modal.Footer>
                        <button className="w-100 btn btn-primary" onClick={(handleClose, DepositoBalance)}>
                            Depositar
                        </button>
                        <button className="w-100 btn btn-primary" onClick={(handleClose, ExtractBalance)}>
                            Extraccion
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Cartera;
