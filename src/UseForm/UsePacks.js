import { useState, useEffect } from 'react';
import UseCard from './UseCard';
import axios from 'axios';
import { Card, Button, Modal, Carousel, NavDropdown } from 'react-bootstrap';
import useCard from './UseCard';

function UsePacks({ token }) {
    const { isAdmin } = UseCard({ token });
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const exampleImage = 'https://yumagic.com/wp-content/uploads/2018/11/edicion-video-programas.jpg';
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [input, setInput] = useState({});
    const [pack, setPack] = useState([]);
    const [idDelete, setIdDelete] = useState('');
    const { id } = useCard({ token });
    const [packTodos, setPackTodos] = useState([]);
    const [idDeleteTodos, setIdDeleteTodos] = useState('');

    useEffect(() => {
        EffectPacks(id);
        if (idDelete) {
            DeletePack();
        }
        EffectPacksTodos(id);
        if (idDelete) {
            DeletePack();
        }
    }, [id, idDelete]);
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    const HandleSubmit = async (e) => {
        const headers = { 'x-auth-token': token };
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/api/packs', input, {
                headers,
            });
            window.location.reload();
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const EffectPacks = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:4000/api/packs/${id}`);
            setPack(data);
            setIdDelete(data._id);
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const EffectPacksTodos = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:4000/api/packs`);
            setPackTodos(data);
            setIdDeleteTodos(data._id);
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const DeletePack = async () => {
        const tokend = localStorage.getItem('token');
        const headers = { 'x-auth-token': tokend };
        try {
            const { data } = await axios.delete(`http://localhost:4000/api/packs/${idDelete}`, { headers });
            window.location.reload();
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const CardPerfil = pack.map((pac, i) => (
        <div key={i}>
            <Card className="m-2 cardPackDate">
                {isAdmin && (<div className="d-flex justify-content-end">
                    <NavDropdown>
                        <NavDropdown.Item>Opciones</NavDropdown.Item>
                        <NavDropdown.Item>Modificar</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => setIdDelete(pac._id)}>Delete</NavDropdown.Item>
                    </NavDropdown>
                </div>)}
                <Card.Img variant="top" src={pac.imagen || exampleImage} />
                <Card.Body>
                    <Card.Title>{pac.titulo}</Card.Title>
                    <Card.Text>{pac.descripcion}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={handleShow}>
                        <i>Ver Packs</i>
                    </Button>
                </Card.Footer>
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
    ));
    const CardPerfilTodos = packTodos.map((pac, i) => (
        <div key={i}>
            <Card className="m-2 cardPackDate">
                {isAdmin && (<div className="d-flex justify-content-end">
                    <NavDropdown>
                        <NavDropdown.Item>Opciones</NavDropdown.Item>
                        <NavDropdown.Item>Modificar</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => setIdDelete(pac._id)}>Delete</NavDropdown.Item>
                    </NavDropdown>
                </div>)}
                <Card.Img variant="top" src={pac.imagen || exampleImage} />
                <Card.Body>
                    <Card.Title>{pac.titulo}</Card.Title>
                    <Card.Text>{pac.descripcion}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={handleShow}>
                        <i>Ver Packs</i>
                    </Button>
                </Card.Footer>
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
    ));
    return {
        CardPerfilTodos,
        HandleSubmit,
        HandleChange,
        handleClose,
        handleShow,
        CardPerfil,
        show,
        pack,
    };
}

export default UsePacks;
