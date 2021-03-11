import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//extraer
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/NavBar';

function App() {
    const [routes, setRoutes] = useState();
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Header setRoutes={setRoutes} token={token} />
            <Switch>
                <Route path="/" exact>
                    {routes === 'home' && <div>Hola estas en home</div>}
                    {routes === 'login' && <Login setRoutes={setRoutes} setToken={setToken} />}
                    {routes === 'register' && <Register setRoutes={setRoutes} setToken={setToken} />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
