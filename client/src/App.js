import './App.css';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
    const [jwt, setJwt] = useState("")
    const [user, setUser] = useState({})

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={ <Index /> }/>
                    <Route path="/register" element={ <Register /> }/>
                    <Route path="/login" element={ <Login setJwt={setJwt} setUser={setUser} jwt={jwt}/> }/>
                    <Route path="*" element={ <NotFound /> }/>
                </Routes>
            </div>
        </Router>
  );
}

export default App;
