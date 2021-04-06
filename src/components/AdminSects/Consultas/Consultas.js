import UseConsulta from '../../../UseForm/UseConsulta';
import { useState, useEffect } from 'react';

function Proyectos() {
    const { getConsult } = UseConsulta();
    return (
        <div className="w-100">
            <div className="search-input d-flex justify-content-around">
                <div className="d-flex pt-5"></div>
            </div>
            <table className="w-100">
                <thead className="thead pt-5">
                    <tr className="m-2">
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Apellido</th>
                        <th className="text-center">Titulo</th>
                        <th className="text-center">Descripcion</th>
                    </tr>
                </thead>
                <tbody className="mt-2">
                    {getConsult.length !== undefined && getConsult.map((consulta, i) => (
                        <tr key={i}>
                            <th className="text-center">{consulta.nombre}</th>
                            <th className="text-center">{consulta.apellido}</th>
                            <th className="text-center">{consulta.titulo}</th>
                            <th className="text-center">{consulta.descripcion}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Proyectos;
