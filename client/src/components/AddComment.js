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
        <div>
            <form onSubmit={submit} onChange={handleChange}>
                <textarea id="comment" type="string" placeholder="Comment topic"></textarea>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    )
}

export default AddComment