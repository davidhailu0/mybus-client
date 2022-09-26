import { Typography,Button } from '@mui/material';
import translateWord from '../../utils/languageTranslation';
import { useCookies } from 'react-cookie';

export default function CustomButton({dayOfTheWeek,active,day,onClick}){
    const [cookie] = useCookies(['lang'])
    return (
    <Button onClick={onClick} sx={{display:"grid",background:active?"#10c9a7":"white",color:"black",borderColor:"black",margin:"0 3px",":hover":{borderColor:"#10c9a7",background:active?"#10c9a7":"white"}}} variant="outlined">
        <Typography sx={{fontWeight:"bold"}}>{translateWord(cookie["lang"],dayOfTheWeek)}</Typography>
        <Typography>{day}</Typography>
    </Button>
    );
}