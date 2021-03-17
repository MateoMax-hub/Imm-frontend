import React from 'react'
import "./barraLateralAdmin.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BarraLateralAdmin() {
    return (
        <div className="a-barraL d-flex flex-column">
            <div className="abr-my h-100">
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={Link} to="/admin/users" variant="outline-danger" className="a-br-custom-button">listado de usuarios</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={Link} to="/admin/pedidos" variant="outline-danger" className="a-br-custom-button">listado de pedidos</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={Link} to="/admin/proyectos" variant="outline-danger" className="a-br-custom-button">listado de proyectos de muestra</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center h-25">
                    <Button as={Link} to="/admin/packs" variant="outline-danger" className="a-br-custom-button">listado de packs</Button>
                </div>
            </div>
        </div>
    )
}

export default BarraLateralAdmin
