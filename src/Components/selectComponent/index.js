import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#2fe6c8",
        },
    }
}) 

export default function SelectComponent({label,value,setValue,options,placeholder}){
    return(<ThemeProvider theme={customTheme}>
        <FormControl sx={{width:"47%","&:hover fieldset":{borderWidth:"3px"},margin:"2rem 0.5rem 1rem"}}>
            <InputLabel id={label}>{label}</InputLabel>
            <Select
            labelId={label}
            id={`${label}_id`}
            value={value}
            label={label}
            placeholder={placeholder}
            onChange={setValue}
            >
            {options.map((opt)=><MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
            </Select>
        </FormControl>
      </ThemeProvider>);
}