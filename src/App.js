import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

//import
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Header from './components/common/Header/NavBar';
import Footer from './components/common/Footer/Footer';
import HeaderSencillo from './components/common/HeaderSencillo/HeaderSencillo';
import Home from './pages/Home/Home';
import Servicios from './pages/Servicios/Servicios';
import Admin from './pages/Admin/Admin';
import Perfil from './pages/Perfil/Perfil';

axios.defaults.baseURL = 'http://localhost:4000/api/';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            {/* switch entre admin o no  */}
            <Switch>
                <Route path="/">
                    {/* switch entre las paginas para todo usuario no admin  */}
                    <Switch>
                        <Route path="/" exact>
                            <Header token={token} />
                            <Home token={token} />
                        </Route>

                        <Route path="/login">
                            <HeaderSencillo />
                            <Login setToken={setToken} />
                        </Route>

                        <Route path="/perfil">
                            <Header token={token} />
                            <Perfil token={token} />
                        </Route>

                        <Route path="/register">
                            <HeaderSencillo />
                            <Register setToken={setToken} />
                        </Route>

                        <Route path="/servicios">
                            <Header token={token} />
                            <Servicios token={token} />
                        </Route>

                        <Route path="/admin">
                            <Admin />
                        </Route>
                    </Switch>
                    <Footer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
