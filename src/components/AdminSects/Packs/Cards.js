import { Card, Button } from 'react-bootstrap';

const Cards = ({ pac }) => {
    return (
        <Card>
            <Card.Header>Pack de Edicion Fotografica</Card.Header>
            <Card.Body>
                <Card.Title>{pac.titulo}</Card.Title>
                <Card.Text>{pac.descripcion}</Card.Text>
                <Button variant="primary">Ver Packs</Button>
            </Card.Body>
        </Card>
    );
};
export default Cards;
