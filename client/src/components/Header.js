import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import React, { Suspense } from 'react';

function Header() {

    return (
        <AppBar color="success" position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/login">User</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
            </Toolbar>
        </AppBar>
    );
}

export default function App() {
    return (
      <Suspense fallback="loading">
        <Header />
      </Suspense>
    );
}