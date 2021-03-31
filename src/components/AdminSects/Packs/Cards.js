import { Card, Button, Modal, Carousel, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';

const Cards = ({ pac }) => {
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card>
                <Card.Header className="d-flex justify-content-between">
                    <div>
                        <b>
                            <i>Pack de Edicion Fotografica</i>
                        </b>
                    </div>
                    <NavDropdown title="Options">
                        <NavDropdown.Item href="#action/3.3">Modificar</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Eliminar</NavDropdown.Item>
                    </NavDropdown>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{pac.titulo}</Card.Title>
                    <Card.Text>{pac.descripcion}</Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        <i>Ver Packs</i>
                    </Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <b>
                            <i>Edicion Fotografica</i>
                        </b>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images4.alphacoders.com/255/thumb-1920-255596.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://fondoescritorio.com.es/file/958/600x338/16:9/wallpaper-c%C3%A1mara-de-fotos_1132782469.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStky090uNnXXT29m4NUJRG22fcoKIPpHI6nJFWX3fZWkI11FL4QeeAM6SVR9ic2kezMog&usqp=CAU"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Comprar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default Cards;
