import BarraLateral from '../../components/BarraLateral/BarraLateral';

const Home = ({ token }) => {
    return (
        <div className="d-flex">
            {token && (
                <div>
                    <BarraLateral />
                </div>
            )}
            <div>Hola sou Home</div>
        </div>
    );
};
export default Home;
