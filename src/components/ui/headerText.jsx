import Typography from '@mui/material/Typography';


function HeaderText({title, component, variant}) {
    return (
        <Typography component={component} variant={variant}>
            {title}
        </Typography>
    );
}

export default HeaderText;