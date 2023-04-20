import TextField from '@mui/material/TextField';

export default function TextInput({ name }) {
    return (
        <TextField
            autoComplete="given-name"
            name={name}
            required
            fullWidth
            id={name}
            label={name}
            autoFocus
        />
    );
}