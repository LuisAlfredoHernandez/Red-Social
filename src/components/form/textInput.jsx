import TextField from '@mui/material/TextField';

export default function TextInput({ name, label, autoComplete, margin }) {
    return (
        <TextField
            margin={margin}
            autoComplete={autoComplete}
            name={name}
            required
            fullWidth
            id={name}
            label={label}
            autoFocus
        />
    );
}