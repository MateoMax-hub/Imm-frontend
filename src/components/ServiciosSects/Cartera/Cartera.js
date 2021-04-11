import { Dropdown, Form, Modal, Button } from 'react-bootstrap';
import './Cartera.css';
import UseCard from '../../../UseForm/UseCard';
import Tarjet from './Target';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Cartera({ token }) {
    const [depo, setDepo] = useState({ balance: 0 });
    const [depoTwo, setDepoTwo] = useState();
    const { card, user, lastName } = UseCard({ token });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Valor = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...depo, [name]: value };
        setDepo(changedInput);
        setDepoTwo(changedInput.balance * -1);
    };
    const DepositoBalance = async () => {
        try {
            const headers = { 'x-auth-token': token };
            await axios.put('usuarios/cartera', depo, { headers });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    const ExtractBalance = async () => {
        try {
            const headers = { 'x-auth-token': token };
            await axios.put('usuarios/cartera', { balance: depoTwo }, { headers });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    console.log(depoTwo);
    return (
        <div className="w-100 d-flex justify-content-center mt-5">
            <div className="cardo">
                <div className="d-flex justify-content-center">
                    <h3>
                        <i>
                            {user} {lastName}
                        </i>
                    </h3>
                </div>
                <hr />
                <div className="">
                    <Tarjet />
                    <div className="m-0">
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
                    <div className="d-flex">
                        <button
                            className="w-100 btn btn-primary m-2"
                            onClick={(handleClose, DepositoBalance)}
                        >
                            Depositar
                        </button>
                        <button className="w-100 btn btn-primary m-2" onClick={(handleClose, ExtractBalance)}>
                            Extraccion
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartera;
