import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddComment from './AddComment';
import Comments from './Comments';

function Snippet({user}) {
    const {topic} = useParams();
    const [snippet, setSnippet] = useState([]);

    /* Gets one snippet by topic from database */
    useEffect(() => {
        fetch("/api/snippets/" + topic)
            .then(response => response.json())
            .then(json => setSnippet(json))
    }, [topic])

    return (
        <List>
            <ListItem>
                <ListItemText>
                    <h2>{snippet.topic}</h2>
                    <h5>posted by {snippet.user}</h5>
                    <p>{snippet.code}</p>
                    {user.username ? <AddComment topic={snippet.topic} user={user} /> : <h2>Login to post comments</h2>}
                    <h2>Comments</h2>
                    <Comments />
                </ListItemText>
            </ListItem>
        </List>
    )
}

export default Snippet