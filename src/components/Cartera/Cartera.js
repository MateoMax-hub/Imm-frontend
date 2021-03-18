import { Button, Modal, Dropdown } from 'react-bootstrap';
import usuario from '../../json/usuarios.json';
import { useState, useEffect } from 'react';

const Cartera = () => {
    const [cartera, setCartera] = useState(0);
    useEffect(() => {
        setCartera(usuario[0]);
    }, []);
    console.log(usuario[0]);
    return (
        <div>
            <Button variant="outline-success">
                <i>${cartera.balance} arg</i>
            </Button>
        </div>
    );
};
export default Cartera;
