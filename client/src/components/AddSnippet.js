import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

function AddSnippet({user}) {
    const [snippetData, setSnippetData] = useState({})

    /* Posts new snippet to database */
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
        <Box>
            <Box component="form" onSubmit={submit} onChange={handleChange}>
                <TextField variant="outlined" color="success" id="topic" type="string" label="Topic for your code"></TextField>
                <TextField variant="outlined" color="success" id="code" type="string" label="Your code"></TextField>
                <Button variant="contained" color="success" type="submit">Post</Button>
            </Box>
        </Box>
    )
}

export default AddSnippet