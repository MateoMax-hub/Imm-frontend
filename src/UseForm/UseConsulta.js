import { useState, useEffect } from 'react';
import axios from 'axios';

function UseConsulta() {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        window.location.reload()
    };
    const handleShow = () => setShow(true);
    const [tituloVal, setTituloVal] = useState(false)
    const [consultaVal, setConsultaVal] = useState(false)

    const [getConsult, setGetConsult] = useState({});
    const [input, setInput] = useState({});
    useEffect(() => {
        GetConsult()
    },[])
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    
    const HandleSubmit = async () => {
        const token = localStorage.getItem('token')
        const headers = { 'x-auth-token': token };
        try {
            if (input.titulo === undefined || input.titulo.length <= 0){
                setTituloVal(true)
                return
            } else {
                setTituloVal(false)
            }
            if (input.descripcion === undefined || input.descripcion.length <= 0){
                setConsultaVal(true)
                return
            } else {
                setConsultaVal(false)
            }
            const { data } = await axios.post('consulta', input, { headers })

            handleShow()
        } catch (error) {
            console.log('error en submit', error)
        }
    }
    const GetConsult = async () =>{
        const token = localStorage.getItem('token')
        const headers = { 'x-auth-token': token };
        try {
            const { data } = await axios.get('consulta', { headers })
            setGetConsult(data)
        } catch (error) {
            console.log('error en submit', error)
        }
    }
    return {
        HandleSubmit,
        HandleChange,
        handleClose,
        getConsult,
        show,
        tituloVal,
        consultaVal
    };
}

export default UseConsulta;