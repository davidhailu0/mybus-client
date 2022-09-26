import {Box,TextField,Typography,Button} from "@mui/material"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useCookies } from 'react-cookie';
import translateWord from "../../utils/languageTranslation";
const customTheme = createTheme({
    palette:{
        primary:{
            main:"#10c9a7",
        },
    }
}) 

const PassengerCounter = ({count,setCount,error,setCountError})=>{
    const [cookie] = useCookies(['lang'])
    const handleIncrement = ()=>{
        setCount(prev=>prev+1)
    }
    const handleDecrement = ()=>{
        if(count>1){
            setCount(prev=>prev-1)
        }
    }
    const handleChange = (newValue)=>{
        if(parseInt(newValue)>=1||newValue===""){
            setCountError(false)
            setCount(newValue)
        }
    }
    return <Box sx={{display:"flex",justifyContent:{md:"center",xs:"space-between"},px:"0.5rem",alignItems:"center"}}>
        <Typography color={"#6A6A6A"}>{translateWord(cookie["lang"],"Passengers") }</Typography>
        <Box sx={{display:"flex",ml:"1rem",padding:"0.7rem 1rem",border:"solid 1px #919191",borderRadius:"15px"}}>
            <ThemeProvider theme={customTheme}>
                <TextField value={count} type="number" inputProps={{min:"1"}} onChange={(e)=>handleChange(e.target.value)} error={error} sx={{width:"4.5rem",":hover":{borderColor:""}}}/>
            </ThemeProvider>
            <Box sx={{display:"inline",mx:"1rem",height:"2.5rem",width:"2px",my:"0.5rem",background:"#919191"}}></Box>
            <Button onClick={handleIncrement}><AddOutlinedIcon sx={{color:"#919191"}}/></Button>
            <Button onClick={handleDecrement}><RemoveOutlinedIcon sx={{color:"#919191"}}/></Button>
        </Box>
    </Box>
}

export default PassengerCounter;