import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Comments() {
    const {topic} = useParams();
    const [comments, setComments] = useState([])

    /* Gets all comments by topic from database */
    useEffect (() => {
        fetch("/api/snippets/comments/" + topic)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [topic])

    return (
        <List>
            {comments.map((comment) => (
                <ListItem key={comment._id}>
                    <Box sx={{width: 1, padding: 1, border: '1px solid green'}}>
                        <ListItemText primary={comment.comment} secondary={"posted by " + comment.user}/>
                    </Box>
                </ListItem>
            ))}
        </List>
    )
}

export default Comments