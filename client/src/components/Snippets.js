import Button from '@mui/material/Button';
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
        <div>
            {snippets.map((snippet) => (
                <p key={snippet._id}>
                    <Button component={Link} to={"/snippet/" + snippet.topic}>{snippet.topic} by {snippet.user}</Button>
                    {snippet.code}
                </p>
                
            ))}
        </div>
    )
}

export default Snippets