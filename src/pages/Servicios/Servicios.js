import React from 'react'
import BarraLateral from '../../components/BarraLateral/BarraLateral';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// SERVICIOS SECCIONES 
import Pedidos from '../../components/ServiciosSects/Pedidos/Pedidos';
import Cartera from '../../components/ServiciosSects/Cartera/Cartera';
import Config from '../../components/ServiciosSects/Config/Config';
import Soporte from '../../components/ServiciosSects/Soporte/Soporte';
import Faab from '../../components/ServiciosSects/faab/Faab';
import Segpr from '../../components/ServiciosSects/segpr/Segpr';


function Servicios({ token }) {
    return (
        
            <div className="d-flex">
                {token? (
                    <>
                
                        <Switch>

                            <Route path="/servicios/pedidos">
                                <Pedidos />
                            </Route>

                            <Route path="/servicios/cartera">
                                <Cartera token={token} />
                            </Route>

                            <Route path="/servicios/config">
                                <Config />
                            </Route>

                            <Route path="/servicios/soporte">
                                <Soporte />
                            </Route>
                            
                            <Route path="/servicios/segpr">
                                <Segpr />
                            </Route>

                            <Route path="/servicios/faab">
                                <Faab />
                            </Route>

                            <Route path="/servicios/">
                                <Redirect to="/404" />
                            </Route>
                        </Switch>

                    </>
                ):<Redirect to="/404" />}
            </div>
        
    )
}

export default Servicios
