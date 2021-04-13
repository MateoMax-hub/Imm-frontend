import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import FileButton from './FileButton';

function Tr(props) {
    const { pedidoTr, setPedido, setFile, setPedidoActualizar, handleShowModalInfo } = props;
    const handleFile = () => {
        setPedidoActualizar(pedidoTr)
    }

    const enviarFoto = pedidoTr.segundaEtapa.estado === 'pendiente' && pedidoTr.primeraEtapa.estado === 'completada'

    var estado = '';
    if (pedidoTr.primeraEtapa.estado === 'pendiente') {
        estado = 'esperando foto del usuario';
    } else {
        if (pedidoTr.segundaEtapa.estado === 'pendiente') {
            estado = 'listo para editar';
        } else {
            if (pedidoTr.terceraEtapa.estado === 'pendiente') {
                estado = 'esperando feedback del usuario';
            } else {
                estado = 'pedido completado';
            }
        }
    }

    return (
        <tr>
            <th className="text-center tr">{pedidoTr.consumidor.nombre + ' ' + pedidoTr.consumidor.apellido}</th>
            <th className="text-center tr">
                <Button variant="outline-dark" onClick={() => setPedido(pedidoTr)} className="mr-3">
                    {pedidoTr.pack.titulo}
                </Button>
            </th>
            <th className="text-center tr">{estado}</th>
            <th className="text-center tr">{enviarFoto ? <FileButton setFile={setFile} handleFile={handleFile}/> : <></>}</th>
            <th className="text-center tr">
                <Button onClick={() => handleShowModalInfo(pedidoTr)} variant="outline-info">mas info</Button>
            </th>
        </tr>
    );
}

export default Tr;
