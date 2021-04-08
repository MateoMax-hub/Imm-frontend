import { Card, Button } from 'react-bootstrap';

const Cards = ({ pac }) => {
    return (
        <Card>
            <Card.Header><b><i>Pack de Edicion Fotografica</i></b></Card.Header>
            <Card.Body>
                <Card.Title>{pac.titulo}</Card.Title>
                <Card.Text>{pac.descripcion}</Card.Text>
                <Button variant="primary"><i>Ver Packs</i></Button>
            </Card.Body>
        </Card>
    );
};
export default Cards;