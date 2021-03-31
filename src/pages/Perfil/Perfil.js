import PerfilCommon from '../../components/common/Perfil/Perfil';

const Perfil = ({ token }) => {
    return (
        <div className="m-2">
            <PerfilCommon token={token} />
        </div>
    );
};
export default Perfil;