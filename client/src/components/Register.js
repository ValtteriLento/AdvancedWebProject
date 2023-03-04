import Button from '@mui/material/Button';
import { useState } from 'react';

function Register() {
    const [userData, setUserData] = useState({})

    const submit = () => {

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
            <form onChange={handleChange}>
                <input id="username" type="string" placeholder="username"></input>
                <input id="password" type="password" placeholder="password"></input>
            </form>
            <Button variant="contained" color="success" onClick={()=> submit()}>Submit</Button>
        </div>
    )
}

export default Register