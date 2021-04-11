import { React, useState, useEffect } from 'react';
import './pedidos.css';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import Tbody from './Tbody';
import Etapas from './Etapas';
import BarraLateral from '../../BarraLateral/BarraLateral';

function Pedidos() {
    // estados del modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // pedido seleccionado en tabla
    const [pedido, setPedido] = useState([]);
    // todos los pedidos
    const [data, setData] = useState([]);

    // traer todos los pedidos
    useEffect(() => {
        getPedidos();
    }, []);

    const getPedidos = async () => {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        const { data } = await axios.get('pedidos', {
            headers,
        });
        setData(data);
    };

    // cancelar pedidos
    const cancelarPedido = async () => {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        const { data } = await axios.delete(`pedidos/cancelarPedido/${pedido._id}`, {
            headers,
        });
        getPedidos();
        handleClose();
    };

    return (
        <>
            <div className="barraLateral">
                <BarraLateral />
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <div className="container-pedidos d-flex flex-column">
                    <div className="d-flex w-100 etapas-height etapas-c-border config">
                        <div className="w-25 p-3">
                            <h4>Estado:</h4>
                        </div>
                        <Etapas pedido={pedido} getPedidos={getPedidos} />
                    </div>
                    <div className="pr-5 pl-5 pb-5 pt-2 d-flex flex-column w-100 config">
                        <div>
                            <h4>Pedidos realizados:</h4>
                        </div>
                        <div>
                            <div className="pedidos-table w-100 d-flex flex-column overflow-auto">
                                <table className="w-100">
                                    <thead className="thead-pedidos">
                                        <tr className="">
                                            <th className="text-center">editor</th>
                                            <th className="text-center">estado</th>
                                            <th className="text-center"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((pedidoT) => (
                                            <Tbody
                                                pedidoT={pedidoT}
                                                setPedido={setPedido}
                                                pedidoSelected={pedidoT._id === pedido._id}
                                                setShow={setShow}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>Cancelar pedido</Modal.Body>

                <Modal.Footer className="d-flex justify-content-center">
                    <h6>
                        Si el pedido ya esta completado o enviaste tu foto al editor o el editor te la
                        devolvio no se reenbolsara el precio del encargo
                    </h6>
                </Modal.Footer>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="danger" onClick={() => cancelarPedido()}>
                        CANCELAR PEDIDO
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pedidos;
