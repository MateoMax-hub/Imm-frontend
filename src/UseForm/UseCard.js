import { useState, useEffect } from 'react';
import axios from 'axios';

function UseCard({token}) {
    const [lastName, SetLastName] = useState('');
    const [card, SetCard] = useState(1);
    const [user, Setuser] = useState('');
    const [imagen, SetImagen] = useState();
    const [rol, SetRol] = useState('usuario')
    const [id, SetId] = useState();
    const isAdmin = rol === "admin"

    useEffect(() => {
        if (token) {
            nombre();
        }
    }, [token]);

    const nombre = async () => {
        try {
            const headers = { 'x-auth-token': token };
            const { data } = await axios.get('http://localhost:4000/api/usuarios', {
                headers,
            });
            SetLastName(data.apellido)
            SetCard(data.balance)
            Setuser(data.nombre)
            SetImagen(data.imagen)
            SetRol(data.rol)
            SetId(data._id)
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.href= '/'
    };
    return {
        handleLogOut,
        nombre,
        isAdmin,
        lastName,
        imagen,
        card,
        user,
        rol,
        id
    };
}

export default UseCard;
