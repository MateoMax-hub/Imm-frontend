import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/AdminSects/Packs/Cards';
import useCard from './UseCard'

function UsePacks({ token }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState({});
    const [pack, setPack] = useState([]);
    const { id } = useCard({ token })
    
    useEffect(() => {
        EffectPacks(id);
    }, [id]);
    const HandleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };
    const HandleSubmit = async (e) => {
        const headers = { 'x-auth-token': token };
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:4000/api/packs', input, {
                headers,
            });
            console.log('subir', data);
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const EffectPacks = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:4000/api/packs/${id}`);
            setPack(data);
        } catch (error) {
            console.log('datos de error', error);
        }
    };
    const CardPerfil = pack.map((pac, i) => (<Card key={i} pac={pac} />));
    return {
        HandleSubmit,
        HandleChange,
        handleClose,
        handleShow,
        CardPerfil,
        show,
        pack
    };
}

export default UsePacks;