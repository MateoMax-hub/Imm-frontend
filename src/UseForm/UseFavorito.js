import UseCard from './UseCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Carousel, NavDropdown } from 'react-bootstrap';

function UseFavorito({ token }) {
    //Imagen de opcion
    const exampleImage = 'https://yumagic.com/wp-content/uploads/2018/11/edicion-video-programas.jpg';

    //States para modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Guarda lo que viene de GET usuarios
    const [packFavorito, setPackFavorito] = useState([]);
    const [guardado, setGuardado] = useState();
    const [num, setNum] = useState();

    //Extrae el ID de una card para favoritos
    const [idDelete, setIdDelete] = useState('');

    //Parametros de card generadora de Favoritos
    const [proveedor, setProveedor] = useState('');

    //id del usuario
    const { ID, favorito } = UseCard({ token });


    useEffect((ID) => {
        if (idDelete) {
            DeletePack();
        }
        //if(proveedor !== undefined){
        //    Extraer();
        //}
        //const mapFav = packFavorito.map(()=>())
        /*if (packFavorito.favorito !== undefined) {
            setGuardado(packFavorito.favorito);
            let i = 0;
            while (i < 7) {
                console.log('id es ==', i, packFavorito.favorito[i])
                console.log('guardarFavorito', favorito)
                i++
            }
        }*/
    }, [idDelete, proveedor, packFavorito, ID]);

    //Codigo para probar datos
    const Extraer = () => {
        //setProveedor(guardarFavorito._id);
        //console.log('proveedor extract', proveedor);
    };

    

    //Metodo DELETE de cards
    const DeletePack = async () => {
        const tokend = localStorage.getItem('token');
        const headers = { 'x-auth-token': tokend };
        try {
            const { data } = await axios.delete(`http://localhost:4000/api/packs/favorito/${idDelete}`, {
                headers,
            });
            console.log('delete funcion');
            window.location.reload();
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    
    /*const Favoritos = packFavorito.map((pac, i) => (
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
                <button className="btn btn-primary" onClick={() => setProveedor(pac.proveedor)}>
                    <i>Ver Packs</i>
                </button>
            </Card.Footer>
        </Card>
    </div>)
    );*/
    return {
        Extraer,
        proveedor
    };
}

export default UseFavorito;
