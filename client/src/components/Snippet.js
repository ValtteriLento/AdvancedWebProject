import { useState, useEffect } from 'react';

function Snippet() {
    const [snippets, setSnippets] = useState([])

    //Gets snippets from database
    useEffect (() => {
        fetch("/api/snippets")
            .then(response => response.json())
            .then(json => setSnippets(json))
    }, [])

    return (
        <div>
            {snippets.map((snippet) => (
                <p key={snippet._id}>
                    <h3>{snippet.topic} by {snippet.user}</h3>
                    {snippet.code}
                </p>
                
            ))}
        </div>
    )
}

export default Snippet