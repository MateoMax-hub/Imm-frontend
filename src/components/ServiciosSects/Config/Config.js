import { Form, Button, Col, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useCard from '../../../UseForm/UseCard'
import './Config.css'

function Config() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = localStorage.getItem('token')
    const { id } = useCard({ token })
    const [input, setInput] = useState({});
    useEffect(() => {
        if (id !== undefined) {
            console.log(id)
        }
    },[id])
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    const HandleSubmit = async () => {
        const headers = { 'x-auth-token': token };
        try {
            const { data } = await axios.put('usuarios', input,{ headers })
            console.log(data)
            handleShow()
        } catch (error) {
            console.log('error en submit', error)
        }
    }
    
    return (
        <div className="w-100 mt-5 config">
            <div>
                <h2 className="text-center">
                    <b>
                        <i>Cambiar Datos personales</i>
                    </b>
                </h2>
            </div>
            <div className="configuracion w-100">
                <div className="formActualDate">
                    <Form className="mt-5 p-5 border rounded w-100">
                        <Form.Group as={Col} md="15">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" name="nombre" onChange={HandleChange} placeholder="Nombre..." />
                        </Form.Group>
                        <Form.Group as={Col} md="15">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control required type="text" name="apellido" onChange={HandleChange} placeholder="Apellido..." />
                        </Form.Group>
                        <Form.Group as={Col} md="15">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" onChange={HandleChange} placeholder="Email..." />
                        </Form.Group>
                        <Form.Group as={Col} md="15">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="password" onChange={HandleChange} placeholder="*********." />
                        </Form.Group>
                        <Form.Group as={Col} md="15">
                            <Button className="w-100" onClick={HandleSubmit}>
                                Guardar Datos
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <img
                        src="https://png.pngtree.com/png-vector/20200605/ourlarge/pngtree-hacker-with-laptop-on-lap-png-image_2219228.jpg"
                        className="PhotoDeSoporte mt-5"
                    />
                </div>
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>
                            <b className="mt-5">
                                <i>Sus datos fueron actualizados!!</i>
                            </b>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Config;
