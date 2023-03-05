import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NotFound() {

    /* If user navigates to a page that doesn't exist following message is shown */
    return (
        <Box>
            <Typography variant="h4">404: This is not the webpage you are looking for</Typography>
        </Box>
    )
}

export default NotFound