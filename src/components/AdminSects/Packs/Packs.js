import { React, useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './packs.css';
import ConfirmModal from './ConfirmModal';
import CrearUsuario from './CrearUsuario';
import BarraLateralAdmin from '../../../components/BarraLateralAdmin/BarraLateralAdmin';

function Packs() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});
    const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const [confirmShow, setConfirmShow] = useState(false);
    const [deleting, setDeleting] = useState({});
    const [newPackShow, setNewPackShow] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const token = localStorage.getItem('token');
            const headers = {
                'x-auth-token': token,
            };
            const { data } = await axios.get('/packs/', { headers });
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleOpenModal = (e) => {
        setModalData(e);
        setShow(true);
    };
    const handleClose = () => {
        setEditData({});
        setModalData({});
        setShow(false);
        setEditing(false);
    };
    const editModal = (e) => {
        setModalData(e);
        setShow(true);
        setEditing(true);
    };

    const handleEditData = (e) => {
        const { name, value } = e.target;
        const editing = { ...editData, [name]: value };
        setEditData(editing);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const headers = {
            'x-auth-token': token,
        };
        const { data } = await axios.put(`/packs/${modalData._id}`, editData, { headers });
        handleClose();
        getData();
    };
    const deletePack = async (pack) => {
        try {
            const body = { _id: pack._id };
            const { data } = await axios.post(`/packs/delete/`, body);
            console.log(data);
            if (data) {
                console.log('no');
                alert(
                    'el pack que quieres eliminar esta siendo solicitado, termina el pedido antes de eliminarlo'
                );
                return;
            }
            console.log('si');
            const token = localStorage.getItem('token');
            const headers = {
                'x-auth-token': token,
            };
            const { response } = await axios.delete(`/packs/${pack._id}`, { headers });
            getData();
            setConfirmShow(false);
            setDeleting({});
        } catch (error) {
            console.log(error);
        }
    };
    const deletePackConfirm = async (pack) => {
        setConfirmShow(true);
        setDeleting(pack);
    };

    const handleNewPackShow = () => setNewPackShow(true);

    const handleChangeSearch = () => {};
    const handleSelect = () => {};
    const handleMySubmit = () => {};
    return (
        <div className="d-flex w-100">
            <div className="barraLateralPed">
                <BarraLateralAdmin />
            </div>
            <div className="w-100">
                <div className="search-input d-flex justify-content-around">
                    <div className="d-flex ">
                        <input
                            placeHolder="busqueda"
                            className="form-control"
                            onChange={(e) => handleChangeSearch(e)}
                        ></input>
                        <select className="mx-2 form-control" onChange={(e) => handleSelect(e)}>
                            <option disabled selected>
                                buscar por
                            </option>
                            <option value="nombre">Nombre</option>
                            <option value="apellido">Apellido</option>
                            <option value="rol">Rol</option>
                            <option value="estadoCuenta">Estado de cuenta</option>
                            <option value="email">Email</option>
                        </select>
                        <Button onClick={(e) => handleMySubmit(e)} variant="secondary">
                            buscar
                        </Button>
                    </div>
                    <div></div>
                </div>
                <table className="w-100">
                    <thead className="thead">
                        <tr className="m-2">
                            <th className="text-center">Titulo</th>
                            <th className="text-center">precio</th>
                            <th className="text-center"></th>
                            <th className="text-center">
                                <Button variant="success" onClick={handleNewPackShow}>
                                    Crear pack
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="mt-2">
                        {data.map((u) => (
                            <>
                                <tr>
                                    <th className="text-center">{u.titulo}</th>
                                    <th className="text-center">{u.precio}</th>
                                    <th className="text-center">
                                        <Button
                                            variant="outline-dark"
                                            onClick={() => handleOpenModal(u)}
                                            className="mr-3"
                                        >
                                            mas info
                                        </Button>
                                        <Button variant="info" onClick={() => editModal(u)} className="mr-3">
                                            editar
                                        </Button>
                                        <Button variant="danger" onClick={() => deletePackConfirm(u)}>
                                            eliminar
                                        </Button>
                                    </th>
                                </tr>
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
                            {editing ? (
                                <>
                                    <form onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column">
                                        <div className="d-flex mb-2 align-items-center">
                                            <p className="mr-3">Titulo:</p>
                                            <input
                                                defaultValue={modalData.titulo}
                                                name="titulo"
                                                onChange={(e) => handleEditData(e)}
                                            ></input>
                                        </div>
                                        <div className="d-flex mb-2 align-items-center">
                                            <p className="mr-3">Precio:</p>
                                            <input
                                                defaultValue={modalData.precio}
                                                name="precio"
                                                onChange={(e) => handleEditData(e)}
                                            ></input>
                                        </div>
                                        <div className="d-flex mb-2 align-items-center">
                                            <p className="mr-3">Descripcion:</p>
                                            <textarea
                                                defaultValue={modalData.descripcion}
                                                name="descripcion"
                                                className="ta-modal-packs"
                                                onChange={(e) => handleEditData(e)}
                                            ></textarea>
                                        </div>
                                        <Button variant="primary" className="w-100 mt-2" type="submit">
                                            Actualizar
                                        </Button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <p>Titulo: {modalData.titulo}</p>
                                    <p>Precio: {modalData.precio}</p>
                                    <p>Descripcion: {modalData.descripcion}</p>
                                    <img src={modalData.imagen} alt="" className="img-packs"></img>
                                </>
                            )}
                        </div>
                    </Modal.Body>
                </Modal>
                <ConfirmModal
                    setConfirmShow={setConfirmShow}
                    confirmShow={confirmShow}
                    setDeleting={setDeleting}
                    deleting={deleting}
                    deletePack={deletePack}
                />
                <CrearUsuario newPackShow={newPackShow} setNewPackShow={setNewPackShow} getData={getData} />
            </div>
        </div>
    );
}

export default Packs;
