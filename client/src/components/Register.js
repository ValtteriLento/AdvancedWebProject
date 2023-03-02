import {useState} from 'react'

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
                <input id="username" type="string"></input>
                <input id="password" type="password"></input>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    )
}

export default Register