import React from 'react'
import BarraLateral from '../../components/BarraLateral/BarraLateral';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// SERVICIOS SECCIONES 
import Pedidos from '../../components/ServiciosSects/Pedidos/Pedidos';
import Cartera from '../../components/ServiciosSects/Cartera/Cartera';
import Config from '../../components/ServiciosSects/Config/Config';
import Soporte from '../../components/ServiciosSects/Soporte/Soporte';


function Servicios({ token }) {
    return (
        <Router>
            <div className="d-flex">
                {token && (
                    <div>
                        <BarraLateral />
                    </div>
                )}
            
                <Switch>

                    <Route path="/servicios/pedidos">
                        <Pedidos />
                    </Route>

                    <Route path="/servicios/cartera">
                        <Cartera />
                    </Route>

                    <Route path="/servicios/config">
                        <Config />
                    </Route>

                    <Route path="/servicios/soporte">
                        <Soporte />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Servicios
