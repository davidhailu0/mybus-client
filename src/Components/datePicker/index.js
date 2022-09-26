import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import translateWord from '../../utils/languageTranslation';
import { useCookies } from 'react-cookie';

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#10c9a7",
        },
    }
}) 

export default function DepartureDatePicker({value,setDateValue,error,setError,label}){
  const [cookie] = useCookies(["lang"])
  const tomorrowDate = new Date()
  tomorrowDate.setDate(tomorrowDate.getDate()+1)
    return (<LocalizationProvider dateAdapter={AdapterMoment}>
        <Box sx={{display:{md:"flex",xs:'none'}}}>
        <ThemeProvider theme={customTheme}>
        <DesktopDatePicker
            label={translateWord(cookie["lang"],label)}
            inputFormat="MM/DD/YYYY"
            value={value}
            disablePast
            minDate={tomorrowDate}
            disableHighlightToday
            onChange={(value)=>{
              const date = new Date(value)
              const dateNow = new Date()
              if(date.getTime()>dateNow.getTime()){
                setError(false)
                setDateValue(date.getTime())
              }
              else{
                setError(true)
              }
            }}
            renderInput={(params) => <TextField {...params} required error={error} fullWidth sx={{width:"96%",margin:"1rem 0.5rem 2rem",":hover fieldset":{borderWidth:"3px"}}}/>}
          />
          </ThemeProvider>
        </Box>
        <Box sx={{display:{md:"none",xs:'flex'},width:"80vw"}}>
        <ThemeProvider theme={customTheme}>
          <MobileDatePicker
            label={translateWord(cookie["lang"],label)}
            inputFormat="MM/DD/YYYY"
            value={value}
            disablePast
            onChange={setDateValue}
            renderInput={(params) => <TextField {...params} fullWidth sx={{":hover fieldset":{borderWidth:"2px"},margin:"2rem 0.5rem"}}/>}
          />
          </ThemeProvider>
        </Box>
      </LocalizationProvider>);
}