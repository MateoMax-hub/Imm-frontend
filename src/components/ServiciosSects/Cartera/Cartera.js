import { Form, Modal, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import './Cartera.css';
import UseCard from '../../../UseForm/UseCard';
import Tarjet from './Target';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BarraLateral from '../../BarraLateral/BarraLateral';

function Cartera({ token }) {
    const [depo, setDepo] = useState({ balance: 0 });
    const [depoTwo, setDepoTwo] = useState();
    const { card, user, lastName } = UseCard({ token });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [saldoInsu, setSaldoInsu] = useState(false)


    const Valor = (e) => {
        if (e.target.value < 0) {
            e.target.value = 1
        }
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
            if (card + depoTwo < 0){
                handleShowSaldo()
                return
            }
            const headers = { 'x-auth-token': token };
            await axios.put('usuarios/cartera', { balance: depoTwo }, { headers });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const handleCloseSaldo = () => {
        setSaldoInsu(false)
    }
    const handleShowSaldo = () => {
        setSaldoInsu(true)
    }

    return (
        <>
            <div className="barraLateral">
                <BarraLateral />
            </div>
            <div className="w-100 d-flex justify-content-center">
                <div className="cardo">
                    <hr />
                    <div className="w-100 m-2 text-end">
                        <div>
                            <i>
                                <b>Saldo Actual:</b> ${card} Arg
                            </i>
                        </div>
                        <div>
                            <i>
                                <b>Dueño de la Cuenta: </b>
                                {user} {lastName}
                            </i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Tarjet />
                            <div className="form-group col-md-12">
                                <input
                                    name="balance"
                                    onChange={(e) => Valor(e)}
                                    type="number"
                                    placeholder="Ingresar saldo..."
                                    className="w-100 form-control"
                                    min="0"
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
                            <button
                                className="w-100 btn btn-primary m-2"
                                onClick={(handleClose, ExtractBalance)}
                            >
                                Extraccion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={saldoInsu} onHide={handleCloseSaldo}>
                <Modal.Body>
                    <div className="text-center">
                        <b>
                            <i>Usted no posee el monto que esta intentando extraer, por favor intente denuevo</i>
                        </b>
                    </div>
                    <hr />
                    <div className="d-flex flex-column ml-2">
                        <Button onClick={handleCloseSaldo} variant="outline-secondary">
                            cerrar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Cartera;
