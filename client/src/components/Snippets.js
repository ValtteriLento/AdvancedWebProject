import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Snippets() {
    const [snippets, setSnippets] = useState([])

    /* Gets all snippets from database */
    useEffect (() => {
        fetch("/api/snippets")
            .then(response => response.json())
            .then(json => setSnippets(json))
    }, [])

    return (
        <List>
            {snippets.map((snippet) => (
                <ListItem key={snippet._id}>
                    <Box sx={{width: 1, padding: 1, border: '1px solid green'}}>
                        <Button size="large" color="success" component={Link} to={"/snippet/" + snippet.topic}>{snippet.topic}</Button>
                        <ListItemText primary={snippet.code} secondary={"posted by " + snippet.user} />
                    </Box>
                </ListItem>
            ))}
        </List>
    )
}

export default Snippets