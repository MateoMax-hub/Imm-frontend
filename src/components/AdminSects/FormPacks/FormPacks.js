import { useState, useEffect, React } from 'react';
import UsePacks from '../../../UseForm/UsePacks';
import FavCard from '../../../UseForm/FavCard';
import { Button, Modal, Spinner, Card } from 'react-bootstrap';
import axios from 'axios';
import CardCompletado from './CardCompletado';

function FormPacks({ token }) {
    const {
        CardPerfil,
        exampleImage,
        guardarFav,
        packTodos,
        favorito,
        handleShowBuy,
        pedidoBuyShow,
        handleCloseBuy,
        comprarPack,
        pedidoInProgres,
        handleCloseSaldo,
        saldoInsu
    } = UsePacks({
        token,
    });

    const [confirmShow, setConfirmShow] = useState(false);
    const [data, setData] = useState(false);
    const [deleting, setDeleting] = useState({});
    const [favExist, setFavExist] = useState(false);
    const [completoExist, setCompletoExist] = useState(false);

    useEffect(() => {
        getCompletados();
    }, []);

    useEffect(() => {
        if (favorito) {
            if (favorito.length === 0) {
                setFavExist(true);
            } else {
                setFavExist(false);
            }
        }
    }, [favorito]);

    useEffect(() => {
        if (data) {
            if (data.length === 0) {
                setCompletoExist(true);
            } else {
                setCompletoExist(false);
            }
        }
    }, [data]);

    const getCompletados = async () => {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        const { data } = await axios.get('/pedidos/perfil', { headers });
        setData(data);
    };

    const handleClose = () => {
        setConfirmShow(false);
        setDeleting({});
    };
    const handleShow = () => {
        setConfirmShow(true);
    };

    const deletePedido = async (pedido) => {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        const { data } = await axios.delete(`pedidos/cancelarPedido/${pedido._id}`, {
            headers,
        });
        handleClose();
        getCompletados();
    };
    return (
        <div>
            <div className="w-100 d-flex justify-content-center">
                <div className="cardPacks">
                    <div className="d-flex flex-wrap">
                        <>{CardPerfil}</>
                    </div>
                    <div>
                        <div>
                            <p>
                                <i>
                                    <b>Pedidos completados</b>
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        {data ? (
                            <></>
                        ) : (
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
                        )}
                        {completoExist ? (
                            <>
                                <Card className="m-2 cardPackDate">
                                    <Card.Body>
                                        <p className="escrite">
                                            Aca podras ver las imagenes que ya editamos para tí,¿falta alguna?
                                            revisa tus pedidos para corroborar el estado del tuyo!
                                        </p>
                                    </Card.Body>
                                </Card>
                            </>
                        ) : (
                            <></>
                        )}
                        {data ? (
                            data.map((pedido) => (
                                <CardCompletado
                                    pedido={pedido}
                                    handleShow={handleShow}
                                    setDeleting={setDeleting}
                                />
                            ))
                        ) : (
                            <></>
                        )}

                        <Modal show={confirmShow} onHide={handleClose}>
                            <Modal.Body>
                                <div className="text-center">
                                    <b>
                                        <i>Seguro que quiere eliminar?</i>
                                    </b>
                                </div>
                                <hr />
                                <div className="d-flex flex-column ml-2">
                                    <Button onClick={handleClose} variant="outline-secondary">
                                        Cancelar
                                    </Button>
                                    <Button
                                        onClick={() => deletePedido(deleting)}
                                        variant="danger"
                                        className="mt-2"
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </Modal.Body>
                        </Modal>
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
                        {favorito === false && (
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
                        )}
                        {favExist ? (
                            <>
                                <Card className="m-2 cardPackDate">
                                    <Card.Body>
                                        <p className="escrite">
                                            No tienes ningun paquete en favoritos, agrega uno desde la pagina
                                            pricipal!
                                        </p>
                                    </Card.Body>
                                </Card>
                            </>
                        ) : (
                            <></>
                        )}
                        {favorito ? (
                            favorito.map((pac) => (
                                <FavCard
                                    favorito={favorito}
                                    pac={pac.pack}
                                    exampleImage={exampleImage}
                                    guardarFav={guardarFav}
                                    handleShowBuy={handleShowBuy}
                                />
                            ))
                        ) : (
                            <></>
                        )}

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
                                        <i>
                                            Saldo insuficiente para comprar el pack, porfavor recargue saldo e
                                            intente de nuevo
                                        </i>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormPacks;
