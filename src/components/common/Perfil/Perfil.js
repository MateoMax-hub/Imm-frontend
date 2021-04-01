import { Button, Modal } from 'react-bootstrap';
import UseCard from '../../../UseForm/UseCard';
import FormPacks from '../../AdminSects/FormPacks/FormPacks';
import axios from 'axios';
import { useState } from 'react';
import { beforeUpload, getBase64 } from '../../../utils/index';

const Perfil = ({ token }) => {
    const exampleImage =
        'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg';
    const { user, lastName, imagen, email } = UseCard({ token });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChangeImg = async (e) => {
        const img = e.target.files[0];
        if (!beforeUpload(img)) return;
        const base64 = await getBase64(img);
        axios
            .put(
                'http://localhost:4000/api/usuarios',
                { imagen: base64 },
                {
                    headers: { 'x-auth-token': token },
                }
            )
            .then((response) => console.log(response.data));
    };

    return (
        <div className="w-100">
            <div className="perfilDescription">
                <div className="photoPerfil">
                    <div className="PhotoCard m-2">
                        <img className="photo" src={imagen || exampleImage} alt="" />
                    </div>
                    <div>
                        <a onClick={handleShow}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-person-bounding-box"
                                viewBox="0 0 16 16"
                            >
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="descripcion">
                    <h3>
                        <b>
                            <i>
                                {user} {lastName}
                            </i>
                        </b>
                    </h3>
                    <hr/>
                    <p>
                        <b>
                            <i>
                               email: {email}
                            </i>
                        </b>
                    </p>
                </div>
            </div>
            <hr />
            <div>
                <FormPacks token={token} />
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar datos de perfil</Modal.Title>
                    </Modal.Header>
                    <div className="d-flex m-2">
                        <div className="d-flex">
                            <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                                <img
                                    src="https://icongr.am/feather/camera.svg?size=128&color=293f8e"
                                    alt="camera edit"
                                    width="20"
                                />
                            </label>
                            <i className="m-2">Cambiar foto de perfil</i>
                        </div>
                        <input
                            id="file-input"
                            className="d-none"
                            name="img"
                            accept="image/png, image/jpeg"
                            type="file"
                            onChange={onChangeImg}
                        />
                    </div>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Carcelar
                        </Button>
                        <Button variant="primary">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};
export default Perfil;
