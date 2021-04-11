import UsePacks from '../../../UseForm/UsePacks';
import FavCard from '../../../UseForm/FavCard';
import { Button, Modal } from 'react-bootstrap'

function FormPacks({ token }) {
    const { CardPerfil, exampleImage, guardarFav, packTodos, favorito, handleShowBuy, pedidoBuyShow, handleCloseBuy, comprarPack, pedidoInProgres } = UsePacks({
        token,
    });
    // const favPacksFiltered = packTodos.filter((p) p._id === favorito.find((f) => f.pack._id === p.id))

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
                                    <b>Favoritos</b>
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        {favorito.map((pac) => (
                            <FavCard
                                favorito={favorito}
                                pac={pac.pack}
                                exampleImage={exampleImage}
                                guardarFav={guardarFav}
                                handleShowBuy={handleShowBuy}
                            />
                        ))}
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormPacks;
