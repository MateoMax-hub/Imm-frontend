import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

//extraer
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Header token={token} />
                    <Home token={token} />
                </Route>
                <Route path="/login">
                    <Login setToken={setToken} />
                </Route>
                <Route path="/register">
                    <Register setToken={setToken} />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
