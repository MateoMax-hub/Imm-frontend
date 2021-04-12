import { Navbar } from 'react-bootstrap';

const HeaderS = () => {
    return (
        <div>
            <Navbar bg="light" variant="dark">
                <Navbar.Collapse className="navBar d-flex justify-content-center" id="basic-navbar-nav">
                    <div>
                        <Navbar.Brand>
                            <h4>
                                <b className="tituloHeader text-dark">ImmEdit Edicion Fotografica</b>
                            </h4>
                        </Navbar.Brand>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default HeaderS;
