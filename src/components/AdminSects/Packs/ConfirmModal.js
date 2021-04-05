import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function ConfirmModal(props) {
    const { setConfirmShow, confirmShow, deleting, setDeleting, deletePack } = props;

    const handleClose = () => {
        setConfirmShow(false);
        setDeleting({})
    };

    return (
        <Modal show={confirmShow} onHide={handleClose}>
            <Modal.Body>
                <div className="text-center">
                    <b>
                        <i>Seguro que quiere eliminar?</i>
                    </b>
                </div>
                <hr />
                <div className="d-flex flex-column ml-2">
                    <Button onClick={handleClose} variant="outline-secondary">Cancelar</Button>
                    <Button onClick={() => deletePack(deleting)} variant="danger" className="mt-2">Eliminar</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ConfirmModal;
