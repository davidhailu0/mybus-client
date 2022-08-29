import {CardContent,CardActions,Card,Button,Typography,Box} from "@mui/material"

export default function ResultCard({starting_place,destination,date,price}){
    return (<Card sx={{width:"45vw"}}>
        <CardContent>
      <Typography sx={{ fontWeight:"bold",display:"inline-flex"}}>
        {starting_place}
      </Typography>
      <Box sx={{height:"5px",width:"50%",background:"grey",margin:"0 1rem",display:"inline-flex"}}></Box>
     <Typography sx={{ fontWeight:"bold",display:"inline-flex"}}>{destination}</Typography>
     <Typography sx={{ fontWeight:"bold"}}>Date: {date}</Typography>
     <Typography sx={{ fontWeight:"bold"}}>Price: {price}</Typography>
    </CardContent>
    <CardActions>
        <Button>Book Ticket</Button>
    </CardActions>
    </Card>)
}