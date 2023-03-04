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
        <div>
            {comments.map((comment) => (
                <p key={comment._id}>
                    {comment.user}: {comment.comment}
                </p>
            ))}
        </div>
    )
}

export default Comments