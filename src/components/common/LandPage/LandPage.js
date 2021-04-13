import { Carousel, Card, Button, Spinner } from 'react-bootstrap';
import UsePacks from '../../../UseForm/UsePacks';
import './LandPage.css';
import Portada from '../Portada/Portada';

const LandPage = ({ token }) => {
    const { CardPerfilTodos } = UsePacks({ token });
    return (
        <div className="w-100">
            <div>
                <Portada />
            </div>
            <div className="ladnPage d-flex flex-wrap mt-5">
                <div className="ml-2">
                    <Card className="cards">
                        <Card.Img
                            variant="top"
                            src="https://siglodata.com/wp-content/uploads/2018/09/influencers_fotografos_monitoreo_medios_comunicacion_y_redes_sociales.jpg"
                        />
                        <Card.Body>
                            <Card.Title>
                                <i>Edicion de Fotos</i>
                            </Card.Title>
                            <Card.Text className="card-landPage-mh">
                                Pagina donde te pondes contactar con los mejores editores para tener tus fotos
                                mas esteticas.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="carrucel">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.pixelservice.ec/wp-content/uploads/2021/01/reset-Camara-Nikon.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://as01.epimg.net/showroom/imagenes/2018/06/15/portada/1529014009_494947_1529014119_noticia_normal_recorte1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <hr />
            <div className="cardsPage d-flex justify-content-center mt-5 flex-wrap">{CardPerfilTodos}</div>
        </div>
    );
};
export default LandPage;
