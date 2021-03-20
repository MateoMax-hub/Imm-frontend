import { React, useState, useEffect } from 'react';
import './usuarios.css';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Option1 from './Option1';
import Option2 from './Option2';

function Usuarios() {
    const [input, setInput] = useState({})
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([])
    const [editing, setEditing] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const editModal = (u) => {
        setEditing(true)
        setShow(true)
        setUser(u)
    }
    
    useEffect(() => {
        if (show === false){
            setUser([])
            setEditing(false)
        }
    }, [show])

    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get('http://localhost:4000/api/usuarios/admin');
            setUsers(data);
        };
        getUsers();
    }, []);

    useEffect(() => {
        if (user.length !== 0){
            handleShow()
        }
    }, [user])

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(input);
        try {
            const { data } = await axios.put(`http://localhost:4000/api/usuarios/admin/usuario/${user._id}`, input)
            handleClose()
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    return (
        <div className="mt-5 w-100">
            <table className="w-100">
                <thead className="thead">
                    <tr className="">
                        <th className="text-center">nombre</th>
                        <th className="text-center">apellido</th>
                        <th className="text-center">rol</th>
                        <th className="text-center">estado de cuenta</th>
                        <th className="text-center">---</th>
                    </tr>
                </thead>
                <tbody className=" bg-secondary">
                    {users.map((u) => (
                        <>
                            <tr>
                                <th className="text-center">{u.nombre}</th>
                                <th className="text-center">{u.apellido}</th>
                                <th className="text-center">{u.rol}</th>
                                <th className="text-center">{u.estadoCuenta}</th>
                                <th className="text-center">
                                    <Button variant="outline-dark" onClick={() => setUser(u)}>
                                        mas info
                                    </Button>
                                    <Button variant="outline-warning" onClick={() => editModal(u)}>
                                        editar
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
                            <i>
                                Datos de usuario
                            </i>
                        </b>
                    </div>
                    <hr />
                    <div className="d-flex flex-column ml-2">
                        {editing?
                            <>
                                <form onSubmit={handleSubmit}>
                                    <p>Nombre: {user.nombre}</p>
                                    <p>Apellido: {user.apellido}</p>
                                    <div className="d-flex flex-column">
                                        <label>rol</label>
                                        <select onChange={(e) => handleChange(e)} name="rol" className="mb-3">
                                            <Option1 rol={user.rol}/>
                                        </select>
                                        <label>estado de cuenta</label>
                                        <select onChange={(e) => handleChange(e)} name="estadoCuenta" className="mb-3">
                                            <Option2 estado={user.estadoCuenta}/>
                                        </select>
                                    </div>
                                    <p>Email: {user.email}</p>
                                    <input onChange={(e) => handleChange(e)} name="balance" placeholder="balance" type="number" defaultValue={user.balance}></input>
                                    <Button variant="outline-warning" type="submit">actualizar</Button>
                                </form>
                            </>
                            :
                            <>
                                <p>Nombre: {user.nombre}</p>
                                <p>Apellido: {user.apellido}</p>
                                <p>Rol: {user.rol}</p>
                                <p>Estado de cuenta: {user.estadoCuenta}</p>
                                <p>Email: {user.email}</p>
                                <p>Balance: {user.balance}</p>
                            </>
                        }
                    </div>
                    
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Usuarios;
