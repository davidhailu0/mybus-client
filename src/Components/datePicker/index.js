import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Box } from '@mui/material';

export default function DepartureDatePicker({value,setDateValue}){
    return (<LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{display:{md:"flex",xs:'none'}}}>
        <DesktopDatePicker
            label="Departure Date"
            inputFormat="MM/DD/YYYY"
            value={value}
            disablePast
            onChange={setDateValue}
            renderInput={(params) => <TextField {...params} fullWidth sx={{width:"96%",margin:"1rem 0.5rem 2rem"}}/>}
          />
        </Box>
        <Box sx={{display:{md:"none",xs:'flex'}}}>
          <MobileDatePicker
            label="Departure Date"
            inputFormat="MM/DD/YYYY"
            value={value}
            disablePast
            onChange={setDateValue}
            renderInput={(params) => <TextField {...params} fullWidth/>}
          />
        </Box>
      </LocalizationProvider>);
}