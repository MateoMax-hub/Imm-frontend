import { useState, useEffect } from 'react';
import axios from 'axios';

function UseCard({token}) {
    const [user, Setuser] = useState('');
    const [lastName, SetLastName] = useState('');
    const [card, SetCard] = useState(1);
    const [rol, SetRol] = useState('usuario')
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
            Setuser(data.nombre)
            SetRol(data.rol)
            SetLastName(data.apellido)
            SetCard(data.balance)
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.href= '/'
    };
    return {
        user,
        rol,
        isAdmin,
        handleLogOut,
        nombre,
        user,
        card,
        lastName
    };
}

export default UseCard;
