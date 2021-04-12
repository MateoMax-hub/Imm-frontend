import { React, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './packs.css';
import axios from 'axios';

function CrearUsuario(props) {
    const { setNewPackShow, newPackShow, getData } = props;
    const [newPack, setNewPack] = useState({});
    const [fileUp, setFileUp] = useState(false);
    const handleClose = () => {
        setNewPackShow(false);
        setNewPack({});
    };
    const handleCreate = (e) => {
        const { name, value } = e.target;
        const pack = { ...newPack, [name]: value };
        setNewPack(pack);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        try {
            if (!fileUp) {
                alert('por favor elegir una imagen');
                return;
            }
            const { data } = await axios.post('/packs', newPack, { headers });
            handleClose();
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    const onChangeImg = async (e) => {
        const fileUploaded = e.target.files[0];

        const base64 = await getBase64(fileUploaded);
        const pack = { ...newPack, imagen: base64 };
        setNewPack(pack);
        setFileUp(true);
    };

    function getBase64(img) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => resolve(reader.result));
            reader.readAsDataURL(img);
        });
    }
    const onInputClick = (event) => {
        event.target.value = '';
    };
    return (
        <Modal show={newPackShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Actualizar datos de perfil</Modal.Title>
            </Modal.Header>
            <form onSubmit={(e) => handleSubmit(e)} className="mt-2 ml-5">
                <div>
                    <div>
                        <div className="d-flex">
                            <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                                <img
                                    src="https://icongr.am/feather/camera.svg?size=128&color=293f8e"
                                    alt="camera edit"
                                    width="20"
                                />
                            </label>
                            <i className="m-2">elegir foto para pack</i>
                        </div>
                        <input
                            id="file-input"
                            className="d-none"
                            name="img"
                            accept="image/png, image/jpeg"
                            type="file"
                            onChange={onChangeImg}
                            onClick={onInputClick}
                        />
                    </div>
                    <div className="d-flex flex-column">
                        <label className="d-flex align-items-center">
                            <i className="mr-2">titulo</i>
                            <input
                                onChange={(e) => handleCreate(e)}
                                className="form-control"
                                name="titulo"
                            ></input>
                        </label>
                        <label className="d-flex align-items-center">
                            <i className="mr-2">precio</i>
                            <input
                                onChange={(e) => handleCreate(e)}
                                className="form-control"
                                name="precio"
                                type="number"
                            ></input>
                        </label>
                        <label className="d-flex align-items-center">
                            <i className="mr-2">descripcion</i>
                            <textarea
                                className="ta-modal-packs"
                                onChange={(e) => handleCreate(e)}
                                className="form-control"
                                name="descripcion"
                            ></textarea>
                        </label>
                    </div>
                </div>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Carcelar
                    </Button>
                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default CrearUsuario;
