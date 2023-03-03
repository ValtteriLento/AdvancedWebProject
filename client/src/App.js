import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
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

    return (
        <Router>
            <div className="App">
                <Header />
                <h2>{jwt ? `Welcome ${user.username}!` : ""}</h2>
                <Routes>
                    <Route path="/" element={ <Index /> }/>
                    <Route path="/login" element={!jwt ? <Login setJwt={setJwt} setUser={setUser} jwt={jwt} /> :
                        <Button id="logout" color="inherit" onClick={()=> logout()}>Logout</Button>}/>
                    <Route path="/register" element={!jwt ? <Register /> : "Logout to register a new account"}/>
                    <Route path="*" element={ <NotFound /> }/>
                </Routes>
            </div>
        </Router>
  );
}

export default App;
