import { React, useState, useEffect } from 'react';
import './pedidos.css';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Tr from './Tr';
import BarraLateralAdmin from '../../../components/BarraLateralAdmin/BarraLateralAdmin';

function Pedidos() {
    // pedidos
    const [data, setData] = useState([]);

    // search
    const [filtro, setFiltro] = useState({});
    const [select, setSelect] = useState('');
    const [selectEstado, setSelectEstado] = useState('');
    const [primerFiltro, setPrimerFiltro] = useState([]);
    const [filtrado, setFiltrado] = useState([]);

    // archivo a enviar
    const [file, setFile] = useState('');
    const [pedidoActualizar, setPedidoActualizar] = useState([]);

    // modal
    const [show, setShow] = useState(false);
    const [pedido, setPedido] = useState([]);

    // modal confirmar foto
    const [showFile, setShowFile] = useState(false);

    // get pedidos
    useEffect(() => {
        setPedido([]);
        getPedidos();
    }, []);

    // segundo filtro pass
    useEffect(() => {
        if (primerFiltro.length !== 0) {
            segundoFiltro();
        }
    }, [primerFiltro]);

    // abrir modal
    useEffect(() => {
        if (pedido.length !== 0) {
            handleShow();
        }
    }, [pedido]);

    // reiniciar datos para modal
    useEffect(() => {
        if (show === false) {
            setPedido([]);
        }
    }, [show]);

    useEffect(() => {
        if (file !== '') {
            handleFile();
        }
    }, [file]);

    const handleFile = () => {
        setShowFile(true);
    };

    const handleCloseModal = () => {
        setFile('');
        setShowFile(false);
    };

    // get pedidos
    const getPedidos = async () => {
        const token = localStorage.getItem('token');
        const headers = {
            'x-auth-token': token,
        };
        const { data } = await axios.get('/pedidos/admin', { headers });
        setData(data);
        setFiltrado(data);
    };

    // cerrar y abrir modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // enviar img
    const sendImg = async () => {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        const body = {
            segundaEtapa: {
                img: file,
            },
        };
        const { data } = await axios.put(`pedidos/segunda/${pedidoActualizar._id}`, body, {
            headers,
        });
        handleCloseModal();
        getPedidos();
    };

    const handleChangeSearch = (e) => {
        const { value } = e.target;
        const filteredBy = { filter: value };
        setFiltro(filteredBy);
    };
    const handleSelect = (e) => {
        const { value } = e.target;
        setSelect(value);
    };
    const handleSelectEstado = (e) => {
        const { value } = e.target;
        setSelectEstado(value);
    };
    const handleMySubmit = async () => {
        if (!filtro.filter) {
            setFiltro({ filter: '' });
        }
        if (selectEstado === 'esperando') {
            const primerFiltroArray = data.filter((u) => u.primeraEtapa.estado === 'pendiente');
            setPrimerFiltro(primerFiltroArray);
        }
        if (selectEstado === 'pendiente') {
            const primerFiltroArray = data.filter(
                (u) => u.segundaEtapa.estado === 'pendiente' && u.primeraEtapa.estado === 'completada'
            );
            setPrimerFiltro(primerFiltroArray);
        }
        if (selectEstado === 'feedback') {
            const primerFiltroArray = data.filter(
                (u) => u.terceraEtapa.estado === 'pendiente' && u.segundaEtapa.estado === 'completada'
            );
            setPrimerFiltro(primerFiltroArray);
        }
        if (selectEstado === 'completado') {
            const primerFiltroArray = data.filter((u) => u.terceraEtapa.estado === 'completada');
            setPrimerFiltro(primerFiltroArray);
        }
        if (selectEstado === 'todos') {
            setPrimerFiltro(data);
        }
        if (selectEstado === 'disabled') {
            alert('por favor complete los campos para filtrar');
        }
        if (!selectEstado) {
            setPrimerFiltro(data);
        }
    };
    const segundoFiltro = () => {
        console.log(filtro);
        if (select === 'nombre') {
            const filteredPedidos = primerFiltro.filter((u) =>
                u.consumidor.nombre.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setFiltrado(filteredPedidos);
        }
        if (select === 'apellido') {
            const filteredPedidos = primerFiltro.filter((u) =>
                u.consumidor.apellido.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setFiltrado(filteredPedidos);
        }
        if (select === 'email') {
            const filteredPedidos = primerFiltro.filter((u) =>
                u.consumidor.email.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setFiltrado(filteredPedidos);
        }
        if (select === 'nombrePack') {
            const filteredPedidos = primerFiltro.filter((u) =>
                u.pack.titulo.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setFiltrado(filteredPedidos);
        }
        if (select === 'disabled') {
            alert('por favor complete los campos para filtrar');
        }
        if (select === '') {
            setFiltrado(primerFiltro);
        }
        setPrimerFiltro([]);
    };
    return (
        <div className="d-flex">
            <div className="barraLateralPed">
                <BarraLateralAdmin />
            </div>
            <div className="tablePedidosPrincipal">
                <div className="search-input-pedidos d-flex justify-content-around">
                    <div className="d-flex">
                        <input
                            placeHolder="Buscar..."
                            className="form-control"
                            onChange={(e) => handleChangeSearch(e)}
                        ></input>
                        <select className="mx-2 form-control" onChange={(e) => handleSelect(e)}>
                            <option value="disabled" selected disabled>
                                Buscar por
                            </option>
                            <option value="nombre">Nombre consumidor</option>
                            <option value="apellido">Apellido consumidor</option>
                            <option value="email">Email consumidor</option>
                            <option value="nombrePack">Nombre pack</option>
                        </select>
                        <select className="mx-2 form-control" onChange={(e) => handleSelectEstado(e)}>
                            <option value="disabled" selected disabled>
                                filtrar
                            </option>
                            <option value="todos">Todos</option>
                            <option value="esperando">Esperando foto</option>
                            <option value="pendiente">Pendiente entrega</option>
                            <option value="feedback">Pendiente feedback</option>
                            <option value="completado">Completado</option>
                        </select>
                        <Button onClick={() => handleMySubmit()} variant="primary">
                            <b>Buscar</b>
                        </Button>
                    </div>
                    <div></div>
                </div>
                <table className="tablePedidos">
                    <thead className="thead-pedidos">
                        <tr className="m-2">
                            <th className="text-center">Consumidor</th>
                            <th className="text-center">Pack</th>
                            <th className="text-center">Fecha de iniciacion</th>
                            <th className="text-center">Estado</th>
                            <th className="text-center">---</th>
                        </tr>
                    </thead>
                    <tbody className="mt-5">
                        {filtrado.map((u) => (
                            <>
                                <Tr
                                    pedidoTr={u}
                                    setPedido={setPedido}
                                    setFile={setFile}
                                    setPedidoActualizar={setPedidoActualizar}
                                />
                            </>
                        ))}
                    </tbody>
                </table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <div className="text-center">
                            <b>
                                <i>Datos del pack</i>
                            </b>
                        </div>
                        <hr />
                        <div className="d-flex flex-column ml-2">
                            {show ? (
                                <>
                                    <p>Titulo: {pedido.pack.titulo}</p>
                                    <p>Descripcion: {pedido.pack.descripcion}</p>
                                    <p>Precio: {pedido.precio}</p>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    size="lg"
                    show={showFile}
                    onHide={handleCloseModal}
                    onClose={handleCloseModal}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">Confirmar imagen</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
                        <img src={file}></img>
                        <Button variant="outline-success" className="mt-3" onClick={sendImg}>
                            Enviar
                        </Button>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default Pedidos;
