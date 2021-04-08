import './Portada.css';

const Header = () => {
    return (
        <div className="body">
            <div className="banner">
                <img
                    src="https://blog.orange.es/wp-content/uploads/sites/4/2019/08/Photo.jpg"
                    className="bg"
                />
                <div className="content">
                    <h2 className="titulo">Fotografia</h2>
                    <p className="text-light">
                        Bienvenido a <b><i>Immedit</i></b>, esta pagina tiene el fin de que los usuarios busquen solucionar el problema de no poder tener ni amigos editores o tutoriales exitosos, aqui los usuarios puede ingresar y buscar packs de imagenes o editoes que les resulten que tienen lo que buscan y podes pagar un precio accesible para cualquiera y llevar sus imagenes como ellos querian.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Header;
