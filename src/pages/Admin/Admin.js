import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'



// ============
// import componentes y css 
// ============
import BarraLateralAdmin from '../../components/BarraLateralAdmin/BarraLateralAdmin'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Packs from '../../components/AdminSects/Packs/Packs'
import Pedidos from '../../components/AdminSects/Pedidos/Pedidos'
import Proyectos from '../../components/AdminSects/Proyectos/Proyectos'
import Usuarios from '../../components/AdminSects/Usuarios/Usuarios'
import Consultas from '../../components/AdminSects/Consultas/Consultas'
import "./admin.css"




function Admin() {
    return (
        <Router>

            <div className="d-flex flex-column">
                <HeaderAdmin />
                <div className="d-flex">
                    <BarraLateralAdmin />
                        <Switch>

                            <Route path="/admin/users">
                                <Usuarios />
                            </Route>

                            <Route path="/admin/pedidos">
                                <Pedidos />
                            </Route>

                            <Route path="/admin/proyectos">
                                <Proyectos />
                            </Route>

                            <Route path="/admin/packs">
                                <Packs />
                            </Route>

                            <Route path="/admin/consulta">
                                <Consultas />
                            </Route>

                        </Switch>
                </div>
            </div>
        </Router>

    )
}

export default Admin
