import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import axios from 'axios'



// ============
// import componentes y css 
// ============
import BarraLateralAdmin from '../../components/BarraLateralAdmin/BarraLateralAdmin'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import Packs from '../../components/AdminSects/Packs/Packs'
import Pedidos from '../../components/AdminSects/Pedidos/Pedidos'
import Usuarios from '../../components/AdminSects/Usuarios/Usuarios'
import Consultas from '../../components/AdminSects/Consultas/Consultas'
import "./admin.css"




function Admin() {
    const [data, setData] = useState(true)

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token){
            getAdminVal()
        }
    }, [])
    
    const getAdminVal = async () => {
        const headers = { "x-auth-token": token }
        const { data } = await axios.get('/usuarios/admin/val',{headers})
        setData(data)
    }

    

    return (

            <div className="d-flex flex-column">
                {!token && <Redirect to="/404"/>}
                {!data && <Redirect to="/404"/>}

                <HeaderAdmin />
                <div className="d-flex">
                        <Switch>

                            <Route path="/admin/users">
                                <Usuarios />
                            </Route>

                            <Route path="/admin/pedidos">
                                <Pedidos />
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
    )
}

export default Admin
