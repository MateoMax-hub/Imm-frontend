import { Navbar } from 'react-bootstrap';


const HeaderS = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Collapse className="navBar d-flex justify-content-center" id="basic-navbar-nav">
                    
                    <div>
                        <Navbar.Brand>
                            <b>
                                <i>IMMEDIT</i>
                            </b>
                        </Navbar.Brand>
                    </div>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default HeaderS;
