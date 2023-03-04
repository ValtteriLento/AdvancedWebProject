import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'

function AddComment({user, topic}) {
    const [commentData, setCommentData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/snippets/comments", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(commentData),
            mode: "cors"
        })
            .then(response => response.json())
    }

    const handleChange = (e) => {
        setCommentData({...commentData, [e.target.id]: e.target.value, user: user.username, topic: topic})
    }

    return (
        <Box>
            <Box align="left" component="form" onSubmit={submit} onChange={handleChange}>
                <TextField variant="outlined" color="success" id="comment" type="string" label="Your comment"></TextField>
                <Button variant="contained" color="success" type="submit">Post</Button>
            </Box>
        </Box>
    )
}

export default AddComment