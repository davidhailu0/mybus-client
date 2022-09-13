import { useState } from "react";
import {CardContent,CardActions,Card,Button,Typography,Box} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { postRequest } from "../../utils/request-api";
import swal from "sweetalert";

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#10c9a7",
        },
    }
}) 

export default function ResultCard({starting_place,destination,date,price}){
  const [buttonText,setButtonText] = useState("Book Ticket")
  const buttonClicked = async()=>{
    const respData = await postRequest("/ticket/buyticket",{starting_place,destination,date,price})
    swal("Purchased!", `Your TicketId is ${respData.data._id}`, "success");
    setButtonText("Booked")
  }
    return (<Card sx={{width:{md:"45vw",xs:"90vw"},m:"0 2rem 0.5rem",mt:"2rem"}} testcomponent="resultcard">
        <CardContent sx={{display:"grid",justifyItems:'flex-start',pl:"3.5rem"}}>
          <Box sx={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <Typography sx={{ fontWeight:"bold",display:"flex",width:{md:"20%",xs:"30%"}}}>
          {starting_place}
        </Typography>
        <Box sx={{height:"5px",width:"70%",background:"grey",margin:"0.5rem 1rem 0",display:"inline-flex"}}></Box>
      <Typography sx={{ fontWeight:"bold",display:"inline-flex",width:{md:"20%",xs:"30%"}}}>{destination}</Typography>
          </Box>
     <Typography sx={{ fontWeight:"bold",display:"flex",justifyContent:"flex-start"}}>Date: {new Date(parseInt(date)).toDateString()}</Typography>
     <Typography sx={{ fontWeight:"bold",display:"flex",justifyContent:"flex-start"}}>Price: {price} birr</Typography>
    </CardContent>
    <CardActions sx={{display:"flex",justifyContent:"flex-end"}}>
      <ThemeProvider theme={customTheme}>
        <Button variant="contained" testbutton="bookticket" sx={{color:"white",background:buttonText==="Book Ticket"?"#10c9a7":"black",":hover":{color:"white",background:"black"}}} testcomponent="bookticket" onClick={buttonClicked}>{buttonText}</Button>
        </ThemeProvider>
    </CardActions>
    </Card>)
}