import React from 'react';
import { Button } from 'react-bootstrap';
import EtapasCompletadas from './Estados/EtapasCompletadas';
import PrimeraEtapa from './Estados/PrimeraEtapa';
import SegundaEtapa from './Estados/SegundaEtapa';
import TerceraEtapa from './Estados/TerceraEtapa';

function Etapas(props) {
    const { pedido, getPedidos } = props;
    if (pedido.length !== 0) {
        if (pedido.primeraEtapa.estado === 'pendiente') {
            return <PrimeraEtapa pedido={pedido} getPedidos={getPedidos} />;
        } else {
            if (pedido.segundaEtapa.estado === 'pendiente') {
                return <SegundaEtapa />;
            } else {
                if (pedido.terceraEtapa.estado === 'pendiente') {
                    return <TerceraEtapa pedido={pedido} getPedidos={getPedidos} />;
                } else {
                    return <EtapasCompletadas pedido={pedido} />;
                }
            }
        }
    } else {
        return <h6 className="pt-4">seleccione un pedido abajo para ver su progreso</h6>;
    }
}

export default Etapas;
