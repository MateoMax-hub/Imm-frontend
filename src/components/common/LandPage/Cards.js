import { CardGroup, Card } from 'react-bootstrap';

const Cards = () => {
    return (
        <div className="d-flex">
            <CardGroup>
                <Card className="m-2">
                    <Card.Img variant="top" src="https://yumagic.com/wp-content/uploads/2018/11/edicion-video-programas.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional
                            content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-info w-100">Ver Packs</button>
                    </Card.Footer>
                </Card>
                <Card className="m-2">
                    <Card.Img variant="top" src="https://fotocreativo.com/wp-content/uploads/2020/02/laptops-para-edicion-de-video.jpg" width="400px" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-info w-100">Ver Packs</button>
                    </Card.Footer>
                </Card>
                <Card className="m-2">
                    <Card.Img variant="top" src="https://1.bp.blogspot.com/-hxLUrgFcJt8/WxmooCfMUKI/AAAAAAAAAyM/b25Oa2Ih358hosHi9OBO60tZx1KQtRD_wCLcBGAs/s1600/adobe%2Bpremiere%2Bdescargar%2Bgratis.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to additional
                            content. This card has even longer content than the first to show that equal
                            height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <button className="btn btn-info w-100">Ver Packs</button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};
export default Cards;
