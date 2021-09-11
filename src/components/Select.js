import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function Select({ value, label, options, handleChange }) {
    return (
        <TextField
            fullWidth
            id={label}
            select
            label={label}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            variant="outlined"
        >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    )
}