import React from 'react'
import { Button } from 'react-bootstrap'
import './pedidos.css'

function Tbody({ pedidoT, setPedido, pedidoSelected, setShow }) {

    const handleShow = () => setShow(true);



    var estado = ""
    if (pedidoT.primeraEtapa.estado === "pendiente"){
        estado = "editor esperando tu foto"
    } else {
        if (pedidoT.segundaEtapa.estado === "pendiente"){
            estado = "esperando foto del editor"
        } else {
            if (pedidoT.terceraEtapa.estado === "pendiente"){
                estado = "esperando tu feedback :D"
            } else {
                estado = "pedido completado"
            }
        }
    }
    
    return (
        <tr className={`${pedidoSelected?'th-pedidos-select':'th-pedidos'}`}  onClick={() => setPedido(pedidoT)}>
            <th className="text-center">{pedidoT.proveedor.nombre + " " + pedidoT.proveedor.apellido}</th>
            <th className="text-center">{estado}</th>
            <th className="text-center">
                <Button variant="outline-dark" onClick={handleShow} >x</Button>
            </th>
        </tr>
    )
}

export default Tbody
