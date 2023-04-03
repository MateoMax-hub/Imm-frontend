import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

//import
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Header from './components/common/Header/NavBar';
import Footer from './components/common/Footer/Footer';
import Home from './pages/Home/Home';
import Servicios from './pages/Servicios/Servicios';
import Admin from './pages/Admin/Admin';
import Perfil from './pages/Perfil/Perfil';
import Pag404 from './components/404/Pag404';

axios.defaults.baseURL = 'https://imm-backend-production.up.railway.app/api/';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            {/* switch entre admin o no  */}
            <Switch>
                <Route path="/admin">
                    <Admin />
                </Route>

                <Route path="/">
                    {/* switch entre las paginas para todo usuario no admin  */}
                    <Switch>
                        <Route path="/" exact>
                            <Header token={token} />
                            <Home token={token} />
                            <Footer />
                        </Route>

                        <Route path="/login">
                            <Header token={token} />
                            <Login setToken={setToken} />
                            <Footer />
                        </Route>

                        <Route path="/perfil">
                            <Header token={token} />
                            <Perfil token={token} />
                            <Footer />
                        </Route>

                        <Route path="/register">
                            <Header token={token} />
                            <Register setToken={setToken} />
                            <Footer />
                        </Route>

                        <Route path="/servicios">
                            <Header token={token} />
                            <Servicios token={token} />
                            <Footer />
                        </Route>

                        <Route path="/404">
                            <Pag404 />
                        </Route>

                        <Route path="/">
                            <Redirect to="/404" />
                        </Route>

                    </Switch>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
