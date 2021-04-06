import UsePacks from '../../../UseForm/UsePacks';
import UseCard from '../../../UseForm/UseCard';
import { Button, Modal, Form, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import UseFavorito from '../../../UseForm/UseFavorito';

function FormPacks({ token }) {
    const { isAdmin, favorito } = UseCard({ token });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { HandleSubmit, HandleChange, CardPerfil } = UsePacks({
        token,
    });
    const {} = UseFavorito({
        token,
    });

    return (
        <div>
            <div className="w-100 d-flex justify-content-center">
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <div className="p-2 m-2">
                            <Form onSubmit={HandleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control
                                        onChange={(e) => HandleChange(e)}
                                        name="titulo"
                                        type="text"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control
                                        onChange={(e) => HandleChange(e)}
                                        name="imagen"
                                        type="text"
                                    />
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
                                    <Form.Control
                                        onChange={(e) => HandleChange(e)}
                                        name="precio"
                                        type="number"
                                    />
                                </Form.Group>
                                <Button variant="primary" className="w-100" type="submit">
                                    Subir Pack
                                </Button>
                            </Form>
                        </div>
                    </Modal>
                </div>

                <div className="cardPacks">
                    <div className="d-flex flex-wrap">
                        <>{CardPerfil}</>
                    </div>
                    <div>
                        <div>
                            <p>
                                <i>
                                    <b>Favoritos</b>
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        {favorito.map((f) => (
                            <>
                                <Card className="m-2 cardPackDate">
                                    <Card.Img variant="top" src={f.pack.imagen} />
                                    <Card.Body>
                                        <Card.Title>{f.pack.titulo}</Card.Title>
                                        <Card.Text>{f.pack.descripcion}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        <Button variant="primary" onClick={() => console.log('a')}>
                                            <i>Ver Packs</i>
                                        </Button>
                                        <button
                                            className="btn btn-outline-warning"
                                            // onClick={() => guardarFav(pac)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </button>
                                    </Card.Footer>
                                </Card>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormPacks;
