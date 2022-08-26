import { Typography,Button } from '@mui/material';

export default function CustomButton({dayOfTheWeek,day}){
    return (
    <Button sx={{display:"grid",color:"black",borderColor:"black",margin:"0 3px",":hover":{borderColor:"#2fe6c8"}}} variant="outlined">
        <Typography sx={{fontWeight:"bold"}}>{dayOfTheWeek}</Typography>
        <Typography>{day}</Typography>
    </Button>
    );
}