import { React, useState, useEffect } from 'react';
import './pedidos.css';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';

function Pedidos() {
    const handleChangeSearch = () => {

    }
    const handleSelect = () => {

    }
    const handleMySubmit = () => {

    }
    
    return (
        <div className="w-100">
            <div className="search-input-pedidos d-flex justify-content-around">
                <div className="d-flex ">
                    <input placeHolder="busqueda" className="form-control" onChange={(e) => handleChangeSearch(e)}></input>
                    <select className="mx-2 form-control" onChange={(e) => handleSelect(e)}>
                        <option disabled>buscar por</option>
                        <option value="nombre">Nombre</option>
                        <option value="apellido">Apellido</option>
                        <option value="rol">Rol</option>
                        <option value="estadoCuenta">Estado de cuenta</option>
                        <option value="email">Email</option>
                    </select>
                    <Button onClick={() => handleMySubmit()} variant="secondary">buscar</Button>
                </div>
                <div></div>
            </div>
            <table className="w-100">
                <thead className="thead-pedidos">
                    <tr className="m-2">
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Apellido</th>
                        <th className="text-center">Rol</th>
                        <th className="text-center">Estado de cuenta</th>
                        <th className="text-center">---</th>
                    </tr>
                </thead>
                <tbody className="mt-2">
                    {/* {usersFiltrados.map((u) => (
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
                    ))} */}
                </tbody>
            </table>

            {/* <Modal show={show} onHide={handleClose}>
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
                                        <select onChange={(e) => handleChange(e)} name="rol" className="mb-3 form-control">
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
            </Modal> */}
        </div>
    )
}

export default Pedidos
