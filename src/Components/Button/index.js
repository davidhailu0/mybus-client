import { Typography,Button } from '@mui/material';

export default function CustomButton({dayOfTheWeek,day,onClick}){
    return (
    <Button onClick={onClick} sx={{display:"grid",color:"black",borderColor:"black",margin:"0 3px",":hover":{borderColor:"#10c9a7"}}} variant="outlined">
        <Typography sx={{fontWeight:"bold"}}>{dayOfTheWeek}</Typography>
        <Typography>{day}</Typography>
    </Button>
    );
}