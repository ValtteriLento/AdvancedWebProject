import AddSnippet from './AddSnippet';
import Snippets from './Snippets';

function Index({jwt, user}) {

    return (
        <div>
            <h1>Home</h1>
            <h2>{jwt ? "Post your snippet" : "Login to post and comment"}</h2>
            {jwt ? <AddSnippet user={user} /> : ""}
            <h2>Code snippets</h2>
            <Snippets />
        </div>
    )
}

export default Index