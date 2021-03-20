import React from 'react'
import "./headerAdmin.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeaderAdmin() {
    return (
        <div>
            <header className="a-nav d-flex a-nav-border justify-content-between align-content-center">
                <div className="a-logo-border d-flex">
                    <h1 className="a-nav-logo ">ImmEdit</h1>
                    <h6 className="a-nav-logoS">admin</h6>
                </div>
                <Button href="/" variant="outline-danger" className="custom-button-2">volver a home</Button>
            </header>
        </div>
    )
}

export default HeaderAdmin
