import { React, useState, useEffect } from 'react';
import './usuarios.css';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Option1 from './Option1';
import Option2 from './Option2';
import BarraLateralAdmin from '../../../components/BarraLateralAdmin/BarraLateralAdmin';

function Usuarios() {
    // States para el filtro
    const [usersFiltrados, setUsersFiltrados] = useState([]);
    const [select, setSelect] = useState('');
    const [filtro, setFiltro] = useState({});
    const [filtroValidator, setFiltroValidator] = useState({});
    // state para editar usuarios
    const [input, setInput] = useState({});
    // state con todos los users
    const [users, setUsers] = useState([]);
    // states para los modales
    const [user, setUser] = useState([]);
    const [editing, setEditing] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (filtro.filter || filtro.filter === '') {
            afterFilterValidation();
        }
    }, [filtro]);

    const editModal = (u) => {
        setEditing(true);
        setShow(true);
        setUser(u);
    };

    useEffect(() => {
        if (show === false) {
            setUser([]);
            setEditing(false);
        }
    }, [show]);

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get('usuarios/admin');
            setUsers(data);
            setUsersFiltrados(data);
        };
        getUsers();
    }, []);

    useEffect(() => {
        if (user.length !== 0) {
            handleShow();
        }
    }, [user]);

    // HANDLES
    // handle del modal de Bootstrap
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // handle para editar datos desde el modal edit
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(input);
        try {
            const { data } = await axios.put(`usuarios/admin/usuario/${user._id}`, input);
            handleClose();
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    // handles para la busqueda en la lista
    const handleChangeSearch = (e) => {
        const { value } = e.target;
        const filteredBy = { filter: value };
        setFiltroValidator(filteredBy);
    };

    const handleSelect = (e) => {
        const { value } = e.target;
        setSelect(value);
    };

    const handleMySubmit = () => {
        if (!filtroValidator.filter) {
            setFiltro({ filter: '' });
        } else {
            setFiltro({ filter: filtroValidator.filter });
        }
    };
    const afterFilterValidation = () => {
        if (select === 'nombre') {
            const filteredUsers = users.filter((u) =>
                u.nombre.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setUsersFiltrados(filteredUsers);
        }
        if (select === 'apellido') {
            const filteredUsers = users.filter((u) =>
                u.apellido.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setUsersFiltrados(filteredUsers);
        }
        if (select === 'rol') {
            const filteredUsers = users.filter((u) =>
                u.rol.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setUsersFiltrados(filteredUsers);
        }
        if (select === 'estadoCuenta') {
            const filteredUsers = users.filter((u) =>
                u.estadoCuenta.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setUsersFiltrados(filteredUsers);
        }
        if (select === 'email') {
            const filteredUsers = users.filter((u) =>
                u.email.toLowerCase().includes(filtro.filter.toLowerCase())
            );
            setUsersFiltrados(filteredUsers);
        }
        if (select === '') {
            alert('por favor seleccionar que estas intentando buscar');
        }
    };

    return (
        <div className="d-flex w-100">
            <div className="barraLateralPed">
                <BarraLateralAdmin />
            </div>
            <div className="w-100">
                <div className="search-input d-flex justify-content-around">
                    <div className="d-flex ">
                        <input
                            placeHolder="Buscar..."
                            className="form-control"
                            onChange={(e) => handleChangeSearch(e)}
                        ></input>
                        <select className="mx-2 form-control" onChange={(e) => handleSelect(e)}>
                            <option disabled selected>
                                Buscar por
                            </option>
                            <option value="nombre">Nombre</option>
                            <option value="apellido">Apellido</option>
                            <option value="rol">Rol</option>
                            <option value="estadoCuenta">Estado de cuenta</option>
                            <option value="email">Email</option>
                        </select>
                        <Button onClick={() => handleMySubmit()} variant="primary">
                            <b>Buscar</b>
                        </Button>
                    </div>
                    <div></div>
                </div>
                <div style={{ "max-height": "790px", "overflow-y": "auto"}}>
                    <table className="w-100">
                        <thead className="thead">
                            <tr className="m-2">
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Apellido</th>
                                <th className="text-center">Rol</th>
                                <th className="text-center">Estado de cuenta</th>
                                <th className="text-center">---</th>
                            </tr>
                        </thead>
                        <tbody className="mt-2">
                            {usersFiltrados.map((u) => (
                                <>
                                    <tr>
                                        <th className="text-center">{u.nombre}</th>
                                        <th className="text-center">{u.apellido}</th>
                                        <th className="text-center">{u.rol}</th>
                                        <th className="text-center">{u.estadoCuenta}</th>
                                        <th className="text-center">
                                            <Button
                                                variant="outline-dark"
                                                onClick={() => setUser(u)}
                                                className="mr-3"
                                            >
                                                mas info
                                            </Button>
                                            <Button variant="info" onClick={() => editModal(u)}>
                                                editar
                                            </Button>
                                        </th>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <div className="text-center">
                            <b>
                                <i>Datos de usuario</i>
                            </b>
                        </div>
                        <hr />
                        <div className="d-flex flex-column ml-2">
                            {editing ? (
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <p>Nombre: {user.nombre}</p>
                                        <p>Apellido: {user.apellido}</p>
                                        <div className="d-flex flex-column">
                                            <label>rol</label>
                                            <select
                                                onChange={(e) => handleChange(e)}
                                                name="rol"
                                                className="mb-3 form-control"
                                            >
                                                <Option1 rol={user.rol} />
                                            </select>
                                            <label>estado de cuenta</label>
                                            <select
                                                onChange={(e) => handleChange(e)}
                                                name="estadoCuenta"
                                                className="mb-3 form-control"
                                            >
                                                <Option2 estado={user.estadoCuenta} />
                                            </select>
                                        </div>
                                        <p>Email: {user.email}</p>
                                        <input
                                            onChange={(e) => handleChange(e)}
                                            name="balance"
                                            className="form-control"
                                            placeholder="balance"
                                            type="number"
                                            defaultValue={user.balance}
                                            maxLength="7"
                                        ></input>
                                        <Button variant="primary" className="w-100 mt-2" type="submit">
                                            Actualizar
                                        </Button>
                                    </form>
                                </>
                            ) : (
                                <>
                                    <p>Nombre: {user.nombre}</p>
                                    <p>Apellido: {user.apellido}</p>
                                    <p>Rol: {user.rol}</p>
                                    <p>Estado de cuenta: {user.estadoCuenta}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Balance: {user.balance}</p>
                                </>
                            )}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default Usuarios;
