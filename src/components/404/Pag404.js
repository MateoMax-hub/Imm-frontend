import React from 'react'
import Footer from '../common/FooterSencillo/FooterSencillo'
import HeaderSencillo from '../common/HeaderSencillo/HeaderSencillo'
import './Style404.css'
import { Link } from 'react-router-dom'

function Pag404() {
    return (
        <div className="fake-body">
            <HeaderSencillo />
            <div className="w-100 flex-column d-flex justify-content-center align-items-center flex-grow-1">
                <div className="d-flex img404-h">
                    <div className="d-flex flex-column align-items-center justify-content-center mr-4 myFont404">
                        <h1>Error 404</h1>
                        <h5 className=" mt-2">Ups... algo salio mal</h5>
                        <div className="d-flex mt-4">
                            <Link to="/" className="text-primary">volver a la pagina principal</Link>
                        </div>
                    </div>
                    <div className="ml-4">
                        <img className="img404-h" alt="" src="data:image/png;base64,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"></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pag404