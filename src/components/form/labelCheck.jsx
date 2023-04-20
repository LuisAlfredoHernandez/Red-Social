import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function LabelCheck({labelText, CheckboxVal, color}) {
    return (
        <FormControlLabel
            control={<Checkbox value={CheckboxVal} color={color} />}
            label={labelText}
        />
    );
}

