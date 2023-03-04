import { useState } from 'react'

function AddSnippet({user}) {
    const [snippetData, setSnippetData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/snippets", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(snippetData),
            mode: "cors"
        })
            .then(response => response.json())
    }

    const handleChange = (e) => {
        setSnippetData({...snippetData, [e.target.id]: e.target.value, user: user.username})
    }

    return (
        <div>
            <form onSubmit={submit} onChange={handleChange}>
                <textarea id="code" type="string"></textarea>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    )
}

export default AddSnippet