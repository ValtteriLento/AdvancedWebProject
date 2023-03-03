import './App.css';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
    const [jwt, setJwt] = useState("")
    const [user, setUser] = useState({})

    //Sets jwt and user to default values
    const logout = () => {
        setJwt("")
        setUser({})
    }

    //Gets jwt from localstorage if page is refreshed
    useEffect (() => {
        if(window.localStorage.getItem('jwt')) {
            setJwt(window.localStorage.getItem('jwt'));
        }
    }, []);

    //Stores jwt to localstorage for persistent login
    useEffect (() => { 
        window.localStorage.setItem('jwt', jwt);
    }, [jwt]);

    return (
        <Router>
            <div className="App">
                <Header />
                <h2>{jwt ? `Welcome ${user.username}!` : "Login to post and comment"}</h2>
                <Routes>
                    <Route path="/" element={ <Index /> }/>
                    <Route path="/login" element={!jwt ? 
                        <Login setJwt={setJwt} setUser={setUser} jwt={jwt} /> :
                        <Button variant="contained" color="error" onClick={()=> logout()}>Logout</Button>}/>
                    <Route path="/register" element={!jwt ? <Register /> : "Logout to register a new account"}/>
                    <Route path="*" element={ <NotFound /> }/>
                </Routes>
            </div>
        </Router>
  );
}

export default App;
