import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState } from 'react';
import { Buffer } from 'buffer';

function Login({setJwt, jwt, setUser}) {
    const [userData, setUserData] = useState({})

    /* Posts login information to server */
    const submit = (e) => {
        e.preventDefault()

        fetch("/api/users/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.token) {
                    setJwt(data.token)
                    setUser(JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString()))
                }
            })
    }

    const handleChange = (e) => {
        setUserData({...userData, [e.target.id]: e.target.value})
    }

    return (
        <Box>
            <Typography variant="h4">Login</Typography>
            <Box component="form" onSubmit={submit} onChange={handleChange}>
                <Input color="success" id="username" type="text" placeholder="username"></Input>
                <Input color="success" id="password" type="password" placeholder="password"></Input>
                <Button variant="contained" color="success" type="submit">Submit</Button>
            </Box>
        </Box>
    )
}

export default Login