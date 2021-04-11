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

    const [pedidoBuyShow, setPedidoBuyShow] = useState(false)
    
    const [pedidoInProgres, setPedidoInProgres] = useState({})

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

    const comprarPack = async (pac) => {
        try {
            const token = localStorage.getItem('token');
            const headers = { 'x-auth-token': token, 'pack-id': pac._id };
            const { data } = await axios.post(
                'pedidos',
                {},
                {
                    headers,
                }
            );
            handleCloseBuy()
        } catch (error) {
            console.log(error);
            handleCloseBuy()
        }
    };

    const handleCloseBuy = () => {
        setPedidoBuyShow(false);
        setPedidoInProgres({})
    }
    const handleShowBuy = (pack) => {
        setPedidoBuyShow(true);
        setPedidoInProgres(pack)
    }

    const CardPerfilTodos = (
        <>
            {packTodos.map((pac, i) => {
                return (
                    <FavCard
                        favorito={favorito}
                        pac={pac}
                        exampleImage={exampleImage}
                        guardarFav={guardarFav}
                        handleShowBuy={handleShowBuy}
                    />
                );
            })}
            <Modal show={pedidoBuyShow} onHide={handleCloseBuy}>
                <Modal.Body>
                    <div className="text-center">
                        <b>
                            <i>Seguro que quiere comprar este pack?</i>
                        </b>
                    </div>
                    <hr />
                    <div className="d-flex flex-column ml-2">
                        <Button onClick={handleCloseBuy} variant="outline-secondary">
                            Cancelar
                        </Button>
                        <Button onClick={() => comprarPack(pedidoInProgres)} variant="outline-success" className="mt-2">
                            comprar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );

    return {
        CardPerfilTodos,
        handleClose,
        handleShow,
        packTodos,
        show,
        favorito,
        guardarFav,
        handleShowBuy,
        pedidoBuyShow,
        handleCloseBuy,
        comprarPack,
        pedidoInProgres
    };
}

export default UsePacks;
