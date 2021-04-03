import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Carousel, NavDropdown } from 'react-bootstrap';

function UseFavorito({ token, favorito, id }) {
    const exampleImage = 'https://yumagic.com/wp-content/uploads/2018/11/edicion-video-programas.jpg';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [favoritos, setFavoritos] = useState([]);
    const [idDelete, setIdDelete] = useState('');

    useEffect(() => {
        HandleSubmit();
        EffectPacks();
        if (idDelete) {
            DeletePack();
        }
    }, [favorito, idDelete]);

    const Extraer = () => {
        console.log(favoritos);
    };
    const HandleSubmit = async () => {
        //e.preventDefault();
        const headers = { 'x-auth-token': token };
        try {
            const { data } = await axios.post('http://localhost:4000/api/packs/favorito', favorito, {
                headers,
            });
            //window.location.reload();
            console.log('metodo post', data);
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const EffectPacks = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:4000/api/packs/favorito/${id}`);
            console.log('metodo get', data);
            setFavoritos(data);
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const DeletePack = async () => {
        const tokend = localStorage.getItem('token');
        const headers = { 'x-auth-token': tokend };
        try {
            const { data } = await axios.delete(`http://localhost:4000/api/packs/${idDelete}`, {
                headers,
            });
            console.log('delete funcion')
            window.location.reload();
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const Favoritos = favoritos.map((pac, i) => (
        <div key={i}>
            <Card className="m-2 cardPackDate">
                <div className="d-flex justify-content-end">
                    <NavDropdown>
                        <NavDropdown.Item>Opciones</NavDropdown.Item>
                        <NavDropdown.Item>Modificar</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => setIdDelete(pac._id)}>Delete</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <Card.Img variant="top" src={pac.imagen || exampleImage} />
                <Card.Body>
                    <Card.Title>{pac.titulo}</Card.Title>
                    <Card.Text>{pac.descripcion}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <Button variant="primary" onClick={handleShow}>
                        <i>Ver Packs</i>
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    ));
    return {
        Favoritos,
        Extraer,
    };
}

export default UseFavorito;
