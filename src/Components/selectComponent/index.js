import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Box} from '@mui/material'
import translateWord from '../../utils/languageTranslation';
import { useCookies } from 'react-cookie';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#10c9a7",
        },
    }
}) 

export default function SelectComponent({label,value,setValue,options,placeholder,setError,error,fullwidth,differentFrom}){
    const [cookie] = useCookies(["lang"])
    const changeValue = (val)=>{
        setValue(val)
        setError(false)
    }
    return(<ThemeProvider theme={customTheme}>
        <FormControl sx={{width:{md:fullwidth?"96%":"47%",xs:"100%"},"&:hover fieldset":{borderWidth:"3px"},margin:"2rem 0.5rem 1rem"}}>
            <InputLabel id={label}>{translateWord(cookie["lang"],label)}</InputLabel>
            <Select
            labelId={label}
            id={`${label}_id`}
            value={value}
            label={translateWord(cookie["lang"],label)}
            placeholder={placeholder}
            onChange={changeValue}
            error={error}
            sx={{display:"inline-flex",alignContent:"center",alignItems:"center"}}
            >
            {options.map(({name,image})=>{
                if(name!==differentFrom)
            return <MenuItem key={name} value={name}>
                <Box><img src={image} alt={name} height={"50px"} width={"50px"}/><Box sx={{ml:"2rem",display:"inline-flex",verticalAlign:"middle"}}>{translateWord(cookie["lang"],name)}</Box></Box>
                </MenuItem>})}
            </Select>
        </FormControl>
      </ThemeProvider>);
}