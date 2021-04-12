import UsePacks from '../../../UseForm/UsePacks';
import FavCard from '../../../UseForm/FavCard';
import { Spinner, Button } from 'react-bootstrap';

function FormPacks({ token }) {
    const { CardPerfil, exampleImage, guardarFav, packTodos, favorito } = UsePacks({
        token,
    });
    // const favPacksFiltered = packTodos.filter((p) p._id === favorito.find((f) => f.pack._id === p.id))
    const cargando = () => {
        if (favorito.lenght === 0) {
        }
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
                                    <b>Favoritos</b>
                                </i>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        {favorito.length === 0 && (
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
                        {favorito.map((pac) => (
                            <FavCard
                                favorito={favorito}
                                pac={pac.pack}
                                exampleImage={exampleImage}
                                guardarFav={guardarFav}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormPacks;
