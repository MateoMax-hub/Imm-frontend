import { Carousel, Card, Button } from 'react-bootstrap';
import Cards from './Cards';
import Portada from '../Portada/Portada';

const LandPage = () => {
    return (
        <div className="w-100">
            <div>
                <Portada />
            </div>
            <div className="ladnPage">
                <div className="m-2">
                    <Card className="cards">
                        <Card.Img
                            variant="top"
                            src="https://yumagic.com/wp-content/uploads/2015/03/productora-edicion-montaje-audiovisual.jpg"
                        />
                        <Card.Body>
                            <Card.Title>
                                <i>Edicion de Fotos</i>
                            </Card.Title>
                            <Card.Text>
                                Pagina donde te pondes contactar con los mejores editores para tener tus fotos
                                mas faceras.
                            </Card.Text>
                            <button className="btn btn-info">Ver Packs</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="m-2 carrucel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i0.wp.com/folou.co/wp-content/uploads/2020/07/c_mara.jpg?fit=1200%2C675&ssl=1"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.pixelservice.ec/wp-content/uploads/2021/01/reset-Camara-Nikon.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="cardsPage">
                <Cards />
            </div>
        </div>
    );
};
export default LandPage;
