import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
        <Box sx={{padding: 1}}>
            <Typography align="left" variant="h4">{snippet.topic}</Typography>
            <Typography align="left" variant="h6">posted by {snippet.user}</Typography>
            <Typography align="left">{snippet.code}</Typography>
            <Typography align="left" variant="h4">Comments</Typography>
            <Comments />
            {user.username ? <AddComment topic={snippet.topic} user={user} /> : <Typography align="left" variant="h5">Login to post comments</Typography>}
        </Box>
    )
}

export default Snippet