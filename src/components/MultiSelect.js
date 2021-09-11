import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

export default function MultiSelect({ value, label, options, handleChange }) {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel id={label}>{label}</InputLabel>
            <Select
                labelId={label}
                id={label}
                label={label}
                multiple
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                renderValue={(selected) => selected.join(', ')}
            >
                {options.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={value.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}