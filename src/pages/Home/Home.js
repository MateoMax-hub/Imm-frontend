import BarraLateral from '../../components/BarraLateral/BarraLateral';
import LandPage from '../../components/common/LandPage/LandPage';

const Home = ({ token }) => {
    return (
        <div className="home d-flex">
            <LandPage token={token} />
        </div>
    );
};
export default Home;
