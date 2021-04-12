import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Target = () => {
    const [state, setState] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: '',
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name,
        });
    };

    const processPayment = () => {
        console.log('number => ', state.number);
        console.log('name => ', state.name);
        console.log('expiry => ', state.expiry);
        console.log('cvc => ', state.cvc);
        console.log(JSON.stringify(state));
    };
    return (
        <div>
            <div className="card-body">
                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                />
                <hr />
                <form>
                    <div>
                        <b>
                            <i>Ingrese datos para transaccion</i>
                        </b>
                    </div>
                    <div className="mt-5">
                        <div className="form-group">
                            <input
                                type="text"
                                name="number"
                                id="number"
                                maxLength="16"
                                className="form-control"
                                placeholder="Número de la tarjeta"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                maxLength="30"
                                className="form-control"
                                placeholder="Nombre"
                                onChange={handleInputChange}
                                onFocus={handleFocusChange}
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    name="expiry"
                                    id="expiry"
                                    maxLength="4"
                                    className="form-control"
                                    placeholder="Fecha de expiración"
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    name="cvc"
                                    id="cvc"
                                    maxLength="4"
                                    className="form-control"
                                    placeholder="CVC"
                                    onChange={handleInputChange}
                                    onFocus={handleFocusChange}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Target;
