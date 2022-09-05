import { useState } from "react";
import {CardContent,CardActions,Card,Button,Typography,Box} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#10c9a7",
        },
    }
}) 



export default function ResultCard({starting_place,destination,date,price}){
  const [buttonText,setButtonText] = useState("Book Ticket")

  const buttonClicked = ()=>{
    setButtonText("Booked")
  }
    return (<Card sx={{width:"45vw",m:"0 2rem 0.5rem",mt:"2rem"}} testcomponent="resultcard">
        <CardContent>
      <Typography sx={{ fontWeight:"bold",display:"inline-flex"}}>
        {starting_place}
      </Typography>
      <Box sx={{height:"5px",width:"50%",background:"grey",margin:"0 1rem",display:"inline-flex"}}></Box>
     <Typography sx={{ fontWeight:"bold",display:"inline-flex"}}>{destination}</Typography>
     <Typography sx={{ fontWeight:"bold",display:"flex",justifyContent:"flex-start",ml:"3.5rem"}}>Date: {new Date(parseInt(date)).toDateString()}</Typography>
     <Typography sx={{ fontWeight:"bold",display:"flex",justifyContent:"flex-start",ml:"3.5rem"}}>Price: {price} birr</Typography>
    </CardContent>
    <CardActions sx={{display:"flex",justifyContent:"flex-end"}}>
      <ThemeProvider theme={customTheme}>
        <Button variant="contained" sx={{color:buttonText==="Book Ticket"?"white":"#10c9a7",background:buttonText==="Book Ticket"?"#10c9a7":"white",":hover":{color:"white",background:"black"}}} testcomponent="bookticket" onClick={buttonClicked}>{buttonText}</Button>
        </ThemeProvider>
    </CardActions>
    </Card>)
}