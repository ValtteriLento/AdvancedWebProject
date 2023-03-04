import AddSnippet from './AddSnippet';
import Snippet from './Snippet';

function Index({jwt, user}) {

    return (
        <div>
            <h1>Home</h1>
            <h2>Code snippets</h2>
            {jwt ? <AddSnippet user={user} /> : ""}
            <Snippet />
        </div>
    )
}

export default Index