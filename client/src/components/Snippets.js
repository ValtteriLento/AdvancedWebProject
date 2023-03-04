import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
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
                    <ListItemText>
                        <Button size="large" color="success" component={Link} to={"/snippet/" + snippet.topic}>{snippet.topic}</Button>
                        <Typography variant="string">posted by {snippet.user}</Typography>
                        <Typography>{snippet.code}</Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

export default Snippets