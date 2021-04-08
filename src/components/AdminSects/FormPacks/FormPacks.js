import UsePacks from '../../../UseForm/UsePacks';
import FavCard from '../../../UseForm/FavCard';

function FormPacks({ token }) {
    const {
        CardPerfil,
        exampleImage,
        guardarFav,
        packTodos,
        favorito,
    } = UsePacks({
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormPacks;
