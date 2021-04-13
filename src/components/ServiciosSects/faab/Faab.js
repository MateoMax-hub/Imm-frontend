import React from 'react';
import BarraLateral from '../../BarraLateral/BarraLateral';
import './faab.css';

function Faab() {
    return (
        <>
            <div className="barraLateral">
                <BarraLateral />
            </div>
            <div className="SoporteGeneral w-100 mt-5 d-flex flex-column">
                <div className="d-flex flex-column flex-grow-1">
                    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 about-mh ">
                        <div className="w-100">
                            <h3 className="text-center">
                                <b>
                                    <i>About Us</i>
                                </b>
                            </h3>
                        </div>
                        <div className="bg-faab w-75 h-75 d-flex flex-column align-items-center pl-3 pt-3 overflow-auto">
                            <p className="">
                                Bienvenido a{' '}
                                <b>
                                    <i>Immedit</i>
                                </b>
                                , esta pagina tiene el fin de que los usuarios busquen solucionar el problema
                                de no poder tener ni amigos editores o tutoriales exitosos.
                            </p>
                            <p>
                                Aqui los usuarios puede ingresar y buscar packs de edicion y comprar los
                                servicios de un editor para realizar en su foto lo que el pack que el usuario
                                eligio, dice y a un modico precio.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                        <div className="w-100">
                            <h3 className="text-center">
                                <b>
                                    <i>Preguntas frecuentes</i>
                                </b>
                            </h3>
                        </div>
                        <div className="bg-faab2 w-75 h-75 overflow-auto pl-3">
                            <h4 className="mt-3 mb-3">
                                <b>¿Donde puedo cambiar mi contraseña y/o otros datos personales?</b>
                            </h4>
                            <p>
                                En la barra lateral, a la izquierda de esta misma seccion, podras encontrar un
                                apartado "mis datos", clickea ahi y podras cambiar varios datos
                                personales(solo ingresa los que quieras cambiar, el resto, deja en blanco)
                            </p>
                            <h4 className="mt-3 mb-3">
                                <b>¿Puedo reembolsar un pedido?</b>
                            </h4>
                            <p>
                                Todos los pedidos pueden ser eliminados en el momento que desees, no obstante,
                                si ya enviaste tu foto al editor, el precio del pedido no sera reembolsado, ya
                                que es posible que el editor ya este trabajando en tu foto. Para reembolsar un
                                pedido, tienes que apretar en el boton con una X, al lado del pedido mismo, en
                                la seccion "pedidos pendientes"
                            </p>
                            <h4 className="mt-3 mb-3">
                                <b>No me puedo decidir que pack solicitar</b>
                            </h4>
                            <p>
                                Puedes enviar un correo electronico con tu foto, al email de ImmEdit
                                (immeditlegras12@gmail.com) y cuando un editor vea tu mail, te respondera con
                                su opinion personal!
                            </p>
                            <h4 className="mt-3 mb-3">
                                <b>¿Como puedo eliminar mi cuenta?</b>
                            </h4>
                            <p>
                                Actualmente no puedes dar de baja por completo a tu cuenta, pero para aliviar
                                tus preocupaciones, aclaramos que ImmEdit NUNCA hara cargos a ninguna tarjeta
                                de credito alguna vez usada, ya que no se registran en nuestra base de datos y
                                si te preocupa que alguna foto personal tuya se filtre, afirmamos que nuestras
                                bases de datos son seguras y esto no es posible, aun asi puedes eliminarlas
                                desde la seccion "pedidos pendientes", o las que ya recibiste una devolucion
                                de parte del editor, tambien desde tu perfil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faab;
