import { React , useState , useEffect} from 'react'
import './usuarios.css'
import axios from 'axios'

function Usuarios() {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const getUsers = async () => {
            const { data } = await axios.get('http://localhost:4000/api/usuarios/admin');
            setUsers(data)
        }
        getUsers()
    }, [])


    return (
        <div className="mt-5 w-100">
            <table className="w-100">
                <thead className="thead">
                    <tr className="">
                        <th className="text-center">nombre</th>
                        <th className="text-center">apellido</th>
                        <th className="text-center">rol</th>
                        <th className="text-center">estado de cuenta</th>
                        <th className="text-center">---</th>
                    </tr>
                </thead>
                <tbody className=" bg-secondary">
                    {users.map((u) =>(
                        <>
                            <tr>
                                <th className="text-center">{u.nombre}</th>
                                <th className="text-center">{u.apellido}</th>
                                <th className="text-center">{u.rol}</th>
                                <th className="text-center">{u.estadoCuenta}</th>
                                <th className="text-center"></th>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Usuarios
