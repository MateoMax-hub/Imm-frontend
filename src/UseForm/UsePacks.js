import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Modal, Carousel, NavDropdown } from 'react-bootstrap';
import UseFavorito from './UseFavorito';
import UseCard from './UseCard';
import FavCard from './FavCard';

function UsePacks({ token }) {
    const exampleImage = 'https://yumagic.com/wp-content/uploads/2018/11/edicion-video-programas.jpg';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [packTodos, setPackTodos] = useState([]);
    const { favorito, nombre } = UseCard({ token });

    useEffect(() => {
        EffectPacksTodos();
    }, []);

    const EffectPacksTodos = async (id) => {
        try {
            const { data } = await axios.get(`packs`);
            setPackTodos(data);
        } catch (error) {
            console.log('datos de error', error);
        }
    };

    const guardarFav = async (pack) => {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        try {
            const { data } = await axios.put(`/usuarios/${pack._id}`, {}, { headers });
            nombre();
        } catch (error) {
            console.log('datos de error', error);
        }
    };


    const CardPerfilTodos = packTodos.map((pac, i) => {
        return (<FavCard favorito={favorito} pac={pac} exampleImage={exampleImage} guardarFav={guardarFav}/>)
    });
    return {
        CardPerfilTodos,
        handleClose,
        handleShow,
        packTodos,
        show,
        favorito,
        guardarFav
    };
}

export default UsePacks;
