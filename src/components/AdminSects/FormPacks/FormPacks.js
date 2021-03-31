import UsePacks from '../../../UseForm/UsePacks';
import { Button, Modal, Form } from 'react-bootstrap';

function FormPacks({ token }) {
    const { handleClose, handleShow, HandleSubmit, HandleChange, show, CardPerfil } = UsePacks({ token });
    return (
        <div>
            <div>
                <Button variant="primary" onClick={handleShow}>
                    + Agregar Pack
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <div className="p-2 m-2">
                        <Form onSubmit={HandleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control onChange={(e) => HandleChange(e)} name="titulo" type="text" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Imagen</Form.Label>
                                <div>
                                    <Form.Control
                                        type="file"
                                        className="btn btn-secondary"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Descripcion</Form.Label>
                                <div>
                                    <Form.Control
                                        onChange={(e) => HandleChange(e)}
                                        name="descripcion"
                                        type="text"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control onChange={(e) => HandleChange(e)} name="precio" type="number" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Subir Pack
                            </Button>
                        </Form>
                    </div>
                </Modal>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                <>{CardPerfil}</>
            </div>
        </div>
    );
}

export default FormPacks;
