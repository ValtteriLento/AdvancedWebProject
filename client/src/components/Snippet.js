import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Snippet() {
    const {topic} = useParams();
    const [snippet, setSnippet] = useState([]);

    //Gets one snippet by topic from database
    useEffect(() => {
        fetch("/api/snippets/" + topic)
            .then(response => response.json())
            .then(json => setSnippet(json))
    }, [topic])

    return (
        <div>
            <h3>{snippet.topic} by {snippet.user}</h3>
            <p>{snippet.code}</p>
        </div>
    )
}

export default Snippet