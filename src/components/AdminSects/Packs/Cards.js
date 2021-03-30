import { CardGroup, Card } from 'react-bootstrap';

const Cards = ({ pac }) => {
    return (
        <CardGroup className="CardPerfil">
            <Card className="m-2">
                <Card.Img
                    variant="top"
                    src="https://fotocreativo.com/wp-content/uploads/2020/02/laptops-para-edicion-de-video.jpg"
                    width="400px"
                />
                <Card.Body>
                    <Card.Title>{pac.titulo}</Card.Title>
                    <Card.Text>{pac.descripcion}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <button className="btn btn-info w-100">Ver Packs</button>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};
export default Cards;
