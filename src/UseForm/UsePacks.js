import { useState, useEffect } from 'react';
import axios from 'axios';

function UsePacks() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState({});

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/api/packs', input);
            console.log(data);
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    useEffect(() => {
        EffectPacks();
    }, []);
    const EffectPacks = async () => {
        try {
            const { data } = await axios.get(`http://localhost:4000/api/packs/6053c6822a8186108791e43c`);
            console.log(data);
        } catch (error) {
            console.log('datos de error', error);
        }
    };

    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    console.log(input);
    return {
        handleClose,
        handleShow,
        HandleSubmit,
        HandleChange,
        show
    };
}

export default UsePacks;
