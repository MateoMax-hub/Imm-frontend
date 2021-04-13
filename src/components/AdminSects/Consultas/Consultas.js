import UseConsulta from '../../../UseForm/UseConsulta';
import { useState } from 'react';
import BarraLateralAdmin from '../../../components/BarraLateralAdmin/BarraLateralAdmin';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment'

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

    const momentParser = (d) => {
        if (d === undefined){
            return ''
        }
        moment.locale('es', {
            months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
            monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
            weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
            weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
            weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_'),
        });
        return moment(d).format('lll');
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
                            <p>Consulta realizada el: {momentParser(consultaModal.createdAt)}</p>
                            <p>Titulo: {consultaModal.titulo}</p>
                            <p className="consult">Consulta:{consultaModal.descripcion}</p>
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
