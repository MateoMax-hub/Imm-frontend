import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Button, Modal } from 'react-bootstrap';
import UseCard from './UseCard';
import FavCard from './FavCard';

function UsePacks({ token }) {
    const exampleImage = 'https://yumagic.com/wp-content/uploads/2018/11/edicion-video-programas.jpg';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pedidoBuyShow, setPedidoBuyShow] = useState(false);

    const [pedidoInProgres, setPedidoInProgres] = useState({});

    const [packTodos, setPackTodos] = useState([]);

    const { favorito, nombre } = UseCard({ token });

    const [spinnerNeed, setSpinnerNeed] = useState(true);

    const [saldoInsu, setSaldoInsu] = useState(false)

    useEffect(() => {
        EffectPacksTodos();
    }, []);

    useEffect(() => {
        if (packTodos.length === 0) {
            setSpinnerNeed(true);
        } else {
            setSpinnerNeed(false);
        }
    }, [packTodos]);

    const EffectPacksTodos = async (id) => {
        try {
            const { data } = await axios.get(`packs`);
            setPackTodos(data);
            console.log(data)
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
            handleCloseBuy();
            if (data === 'saldo insuficiente'){
                handleShowSaldo()
            } else {
                window.location = '/servicios/pedidos'
            }
        } catch (error) {
            console.log(error);
            handleCloseBuy();
        }
    };

    const handleCloseBuy = () => {
        setPedidoBuyShow(false);
        setPedidoInProgres({});
    };
    const handleShowBuy = (pack) => {
        setPedidoBuyShow(true);
        setPedidoInProgres(pack);
    };
    
    const handleCloseSaldo = () => {
        setSaldoInsu(false)
    }
    const handleShowSaldo = () => {
        setSaldoInsu(true)
    }

    const CardPerfilTodos = (
        <>
            {spinnerNeed ? (
                <div className="d-flex flex-wrap">
                    <div className="w-100 d-flex justify-content-center m-5">
                        <Button variant="primary" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Loading...</span>
                        </Button>{' '}
                        <Button variant="primary" disabled>
                            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                            Loading...
                        </Button>
                    </div>
                </div>
            ) : (
                <></>
            )}
            {packTodos.map((pac, i) => {
                if (localStorage.getItem('token')) {
                    if (favorito !== false) {
                        return (
                            <FavCard
                                favorito={favorito}
                                pac={pac}
                                exampleImage={exampleImage}
                                guardarFav={guardarFav}
                                handleShowBuy={handleShowBuy}
                            />
                        );
                    } else {
                        return (
                            <div className="d-flex flex-wrap">
                                <div className="w-100 d-flex justify-content-center m-5">
                                    <Button variant="primary" disabled>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Loading...</span>
                                    </Button>{' '}
                                    <Button variant="primary" disabled>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </Button>
                                </div>
                            </div>
                        );
                    }
                } else {
                    return (
                        <FavCard
                            favorito={favorito}
                            pac={pac}
                            exampleImage={exampleImage}
                            guardarFav={guardarFav}
                            handleShowBuy={handleShowBuy}
                        />
                    );
                }
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
                        <Button
                            onClick={() => comprarPack(pedidoInProgres)}
                            variant="outline-success"
                            className="mt-2"
                        >
                            comprar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={saldoInsu} onHide={handleCloseSaldo}>
                <Modal.Body>
                    <div className="text-center">
                        <b>
                            <i>Saldo insuficiente para comprar el pack, porfavor recargue saldo e intente de nuevo</i>
                        </b>
                    </div>
                    <hr />
                    <div className="d-flex flex-column ml-2">
                        <Button onClick={handleCloseSaldo} variant="outline-secondary">
                            cerrar
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
        pedidoInProgres,
        saldoInsu,
        handleCloseSaldo
    };
}

export default UsePacks;
