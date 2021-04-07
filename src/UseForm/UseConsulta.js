import { useState, useEffect } from 'react';
import axios from 'axios';

function UseConsulta() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            const { data } = await axios.post('consulta', input, { headers })
            console.log(data)
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
        show
    };
}

export default UseConsulta;