import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useState } from 'react';

function Register() {
    const [userData, setUserData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/users/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
            .then(response => response.json())
    }

    const handleChange = (e) => {
        setUserData({...userData, [e.target.id]: e.target.value})
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={submit} onChange={handleChange}>
                <Input color="success" id="username" type="string" placeholder="username"></Input>
                <Input color="success" id="password" type="password" placeholder="password"></Input>
                <Button variant="contained" color="success" type="submit" >Submit</Button>
            </form>
        </div>
    )
}

export default Register