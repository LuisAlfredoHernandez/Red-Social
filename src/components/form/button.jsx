import Button from '@mui/material/Button';

export default function FormButon({name}) {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
        >
           {name}
        </Button>
    );
}