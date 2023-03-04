import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddSnippet from './AddSnippet';
import Snippets from './Snippets';

function Index({jwt, user}) {

    return (
        <List>
            <h1>Home</h1>
            <ListItem>
                <ListItemText>
                    <h2>{jwt ? "Post your snippet" : "Login to post snippets"}</h2>
                    {jwt ? <AddSnippet user={user} /> : ""}
                    <h2>Code snippets</h2>
                </ListItemText>
            </ListItem>
            <Snippets />
        </List>
    )
}

export default Index