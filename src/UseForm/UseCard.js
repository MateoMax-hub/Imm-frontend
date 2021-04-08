import { useState, useEffect } from 'react';
import axios from 'axios';

function UseCard({ token }) {
    const [lastName, SetLastName] = useState('');
    const [card, SetCard] = useState(1);
    const [user, Setuser] = useState('');
    const [email, SetEmail] = useState('');
    const [imagen, SetImagen] = useState();
    const [rol, SetRol] = useState('');
    const [id, SetId] = useState();
    const [favorito, SetFavorito] = useState([]);
    const isAdmin = rol === 'admin';

    useEffect(() => {
        if (token) {
            nombre();
        }

    }, []);


    const nombre = async () => {
        try {
            const headers = { 'x-auth-token': token };
            const { data } = await axios.get('usuarios/usuarioFav', {
                headers,
            });
            SetLastName(data.apellido);
            SetCard(data.balance);
            Setuser(data.nombre);
            SetImagen(data.imagen);
            SetEmail(data.email);
            SetRol(data.rol);
            SetId(data._id);
            SetFavorito(data.favorito);
        } catch (error) {
            console.log(error);
        }
    };
    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    return {
        handleLogOut,
        nombre,
        favorito,
        isAdmin,
        lastName,
        email,
        imagen,
        card,
        user,
        rol,
        id,
    };
}

export default UseCard;
