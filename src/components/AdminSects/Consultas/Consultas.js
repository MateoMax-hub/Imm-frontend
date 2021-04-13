import UseConsulta from '../../../UseForm/UseConsulta';
import { useState, useEffect } from 'react';
import BarraLateralAdmin from '../../../components/BarraLateralAdmin/BarraLateralAdmin';
import { Modal, Button } from 'react-bootstrap';

function Proyectos() {
    const { getConsult } = UseConsulta();
    const [modalShow, setModalShow] = useState(false);
    const [consultaModal, setConsultaModal] = useState(false);

    const handleCloseModal = () => {
        setModalShow(false);
        setConsultaModal(false);
    };
    const handleShowModal = (c) => {
        setConsultaModal(c);
        setModalShow(true);
    };

    return (
        <>
            <div className="d-flex w-100">
                <div className="barraLateralPed">
                    <BarraLateralAdmin />
                </div>
                <div className="w-100">
                    <div className="search-input d-flex justify-content-around border-0 p-0">
                        <div className="d-flex" style={{ height: '60px' }}></div>
                    </div>
                    <div style={{ 'max-height': '790px', 'overflow-y': 'auto' }}>
                        <table className="w-100">
                            <thead className="thead pt-5">
                                <tr className="m-2">
                                    <th className="text-center">Nombre</th>
                                    <th className="text-center">Apellido</th>
                                    <th className="text-center">Titulo</th>
                                    <th className="text-center"></th>
                                </tr>
                            </thead>
                            <tbody className="mt-2">
                                {getConsult.length !== undefined &&
                                    getConsult.map((consulta, i) => (
                                        <tr key={i}>
                                            <th className="text-center">{consulta.usuario.nombre}</th>
                                            <th className="text-center">{consulta.usuario.apellido}</th>
                                            <th className="text-center">{consulta.titulo}</th>
                                            <Button
                                                variant="outline-dark"
                                                onClick={() => handleShowModal(consulta)}
                                                className="mr-3"
                                            >
                                                mas info
                                            </Button>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {consultaModal ? (
                <Modal show={modalShow} onHide={handleCloseModal}>
                    <Modal.Body>
                        <div className="text-center">
                            <b>
                                <i>Datos de la consulta</i>
                            </b>
                        </div>
                        <hr />
                        <div className="d-flex flex-column ml-2">
                            <p>Nombre: {consultaModal.usuario.nombre}</p>
                            <p>Apellido: {consultaModal.usuario.apellido}</p>
                            <p>Email: {consultaModal.usuario.email}</p>
                            <p>Titulo: {consultaModal.titulo}</p>
                            <p>Consulta: {consultaModal.descripcion}</p>
                        </div>
                    </Modal.Body>
                </Modal>
            ) : (
                <></>
            )}
        </>
    );
}

export default Proyectos;
