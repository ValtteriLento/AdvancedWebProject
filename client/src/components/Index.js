import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddSnippet from './AddSnippet';
import Snippets from './Snippets';

function Index({jwt, user}) {

    return (
        <Box>
            <Typography variant="h1">Home</Typography>
            <Typography variant="h4">{jwt ? "Post your snippet" : "Login to post snippets"}</Typography>
            {jwt ? <AddSnippet user={user} /> : ""}
            <Typography align="left" variant="h4">Code snippets</Typography>
            <Snippets />
        </Box>
    )
}

export default Index