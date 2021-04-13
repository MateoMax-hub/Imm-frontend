import React from 'react'
import { Button } from 'react-bootstrap'
import './pedidos.css'
import moment from 'moment'

function Tbody({ pedidoT, setPedido, pedidoSelected, setShow }) {

    const handleShow = () => setShow(true);

    const momentParser = (d) => {
        if (d === undefined){
            return ''
        }
        moment.locale('es', {
            months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
            weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
            weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
            weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
        });
        return moment(d).format('lll');
    };

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
            <th className="text-center">{momentParser(pedidoT.createdAt)}</th>
            <th className="text-center">{estado}</th>
            <th className="text-center">
                <Button variant="outline-dark" onClick={handleShow} >x</Button>
            </th>
        </tr>
    )
}

export default Tbody
