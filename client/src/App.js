import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Snippet from './components/Snippet';

function App() {
    const [jwt, setJwt] = useState("")
    const [user, setUser] = useState({})

    /* Sets jwt and user to default values */
    const logout = () => {
        setJwt("")
        setUser({})
    }

    /* Checks if there is a jwt available and sets jwt and user when page is loaded */
    useEffect (() => {
        if(window.localStorage.getItem('jwt')) {
            setJwt(window.localStorage.getItem('jwt'));
            setUser(JSON.parse(Buffer.from(window.localStorage.getItem('jwt').split(".")[1], "base64").toString()))
        }
    }, []);

    /* Stores jwt to localstorage for persistent login */
    useEffect (() => { 
        window.localStorage.setItem('jwt', jwt);
    }, [jwt]);

    return (
        <Router>
            <Box className="App">
                <Header />
                <Typography variant="h2">{jwt ? `Welcome ${user.username}!` : ""}</Typography>
                <Routes>
                    <Route path="/" element={ <Index jwt={jwt} user={user} /> }/>
                    <Route path="/login" element={!jwt ? 
                        <Login setJwt={setJwt} setUser={setUser} jwt={jwt} /> :
                        <Button variant="contained" color="error" onClick={()=> logout()}>Logout</Button>}/>
                    <Route path="/register" element={!jwt ? <Register /> : <Typography variant="h4">Logout to register a new account</Typography>}/>
                    <Route path="/snippet/:topic" element={ <Snippet user={user} /> } />
                    <Route path="*" element={ <NotFound /> }/>
                </Routes>
            </Box>
        </Router>
  );
}

export default App;
