import Button from '@mui/material/Button';
import { useState } from 'react'

function Login({setJwt, jwt, setUser}) {
    const [userData, setUserData] = useState({})

    const submit = () => {

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
        <div>
            <h2>Login</h2>
            <form onChange={handleChange}>
                <input id="username" type="text"></input>
                <input id="password" type="password"></input>
            </form>
            <Button variant="contained" color="success" onClick={()=> submit()}>Submit</Button>
        </div>
    )
}

export default Login