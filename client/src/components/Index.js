import AddSnippet from './AddSnippet';

function Index({jwt, user}) {

    return (
        <div>
            <h1>Home</h1>
            {jwt ? <AddSnippet user={user} /> : ""}
        </div>
    )
}

export default Index