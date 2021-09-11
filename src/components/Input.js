import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Input({ label, handleChange, className }) {

    return (
        <FormControl fullWidth variant="outlined" className={className}>
            <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-amount"
                onChange={(e) => handleChange(e.target.value)}
                startAdornment={<InputAdornment position="start">💰</InputAdornment>}
                labelWidth={60}
                type="number"
            />
        </FormControl>
    )
}