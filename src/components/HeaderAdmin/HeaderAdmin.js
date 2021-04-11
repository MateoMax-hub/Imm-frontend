import React from 'react'
import "./headerAdmin.css"
import { Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeaderAdmin() {
    return (
        <div className="sticky-top">
            <Navbar className="search">
                <Navbar.Collapse>
                    <Navbar.Brand as={Link} to="/">
                        <b className="text">
                            <i>I M M E D I T | Admin</i>
                        </b>
                    </Navbar.Brand>
                </Navbar.Collapse>
                <Button href="/" variant="outline-danger" className="custom-button-2">volver a home</Button>
            </Navbar>
        </div>
    )
}

export default HeaderAdmin
