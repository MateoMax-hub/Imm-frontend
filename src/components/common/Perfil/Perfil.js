import { Button, Modal } from 'react-bootstrap';
import UseCard from '../../../UseForm/UseCard';
import FormPacks from '../../AdminSects/FormPacks/FormPacks';
import { useState } from 'react';

const Perfil = ({ token }) => {
    const { user, lastName } = UseCard({ token });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div>
                <div className="w-100 d-flex justify-content-center">
                    <div className="PhotoCard m-2">
                        <img
                            className="photo"
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            alt=""
                        />
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
                <div className="w-100 p-2 text-center">
                    <h2>
                        <b>
                            {user} {lastName}
                        </b>
                    </h2>
                </div>
            </div>
            <hr />
            <div>
                <FormPacks />
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar datos de perfil</Modal.Title>
                    </Modal.Header>
                    <div className="d-flex flex-column p-2 m-2">
                        <i className="m-2">Cambiar foto de perfil</i>
                        <input type="file" />
                    </div>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Carcelar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};
export default Perfil;
