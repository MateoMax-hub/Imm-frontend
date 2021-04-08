import React from 'react';
import { Card, Button } from 'react-bootstrap';

function FavCard(props) {
    const { favorito, pac, exampleImage, guardarFav } = props;
    if (favorito.length === 0) {
        return (
            <>
                <Card className="m-2 cardPackDate">
                    <Card.Img variant="top" src={pac.imagen || exampleImage} />
                    <Card.Body>
                        <Card.Title>{pac.titulo}</Card.Title>
                        <Card.Text>{pac.descripcion}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Button variant="primary">
                            <i>Ver Packs</i>
                        </Button>
                        <button className="btn btn-outline-warning" onClick={() => guardarFav(pac)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </button>
                    </Card.Footer>
                </Card>
            </>
        );
    } else {
        const isFav = favorito.filter((f) => f.pack._id === pac._id);
        if (isFav.length !== 0) {
            return (
                <Card className="m-2 cardPackDate">
                    <Card.Img variant="top" src={pac.imagen || exampleImage} />
                    <Card.Body>
                        <Card.Title>{pac.titulo}</Card.Title>
                        <Card.Text>{pac.descripcion}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Button variant="primary">
                            <i>Ver Packs</i>
                        </Button>
                        <button className="btn btn-warning" onClick={() => guardarFav(pac)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </button>
                    </Card.Footer>
                </Card>
            );
        } else {
            return (
                <Card className="m-2 cardPackDate">
                    <Card.Img variant="top" src={pac.imagen || exampleImage} />
                    <Card.Body>
                        <Card.Title>{pac.titulo}</Card.Title>
                        <Card.Text>{pac.descripcion}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Button variant="primary">
                            <i>Ver Packs</i>
                        </Button>
                        <button className="btn btn-outline-warning" onClick={() => guardarFav(pac)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-star-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </button>
                    </Card.Footer>
                </Card>
            )
        }
    }
}

export default FavCard;