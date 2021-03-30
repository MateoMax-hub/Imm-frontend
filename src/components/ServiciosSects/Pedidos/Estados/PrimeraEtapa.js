import { React, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../pedidos.css';
import FileButton from './FileButton';
import axios from 'axios';

function PrimeraEtapa(props) {
    // props
    const { pedido, getPedidos } = props;
    // saber si hay un archivo subido para el boton de enviar
    const [fileUp, setFileUp] = useState(false);
    // img base64
    const [file, setFile] = useState('');
    // actualizar la primera etapa
    const actualizarPrimeraEtapa = async () => {
        const token = localStorage.getItem('token');
        const headers = { 'x-auth-token': token };
        const body = {
            primeraEtapa: {
                img: file,
            },
        };
        const { data } = await axios.put(`http://localhost:4000/api/pedidos/primera/${pedido._id}`, body, {
            headers,
        });
        getPedidos();
    };
    // saber si hay un archivo subido para el boton enviar
    useEffect(() => {
        if (file !== '') {
            setFileUp(true);
        }
    }, [file]);

    return (
        <div className="w-75 d-flex align-items-center">
            <div className="d-flex flex-column justify-content-center align-content-center">
                <p className="etapas-p-font m-0">
                    El editor esta esperando que le envies tu foto para trabajar con ella!
                </p>
                <div className="d-flex justify-content-center align-content-center">
                    <FileButton setFile={setFile} />
                    {fileUp ? (
                        <Button variant="success" className="ml-2" onClick={actualizarPrimeraEtapa}>
                            Enviar foto
                        </Button>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PrimeraEtapa;
