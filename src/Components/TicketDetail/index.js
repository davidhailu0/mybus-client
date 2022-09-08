import {Box,Typography} from "@mui/material"

const TicketDetail = ({_id,starting_place,destination,date,price})=>{

    console.log(_id,starting_place,destination,date,price)

    return (<Box sx={{padding:"2rem 20%",textAlign:"center",width:"80%",margin:"0 auto",borderRadius:"25px",background:"white"}}>
        <Typography variant="h3">Your Ticket detail</Typography>
        <Box sx={{display:"flex",justifyContent:"left",my:"2rem"}}>
            <Typography variant="h3" sx={{fontWeight:"normal"}}>ID:</Typography>
            <Typography variant="h3" sx={{marginLeft:"6rem"}}>{_id}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"left",my:"2rem"}}>
            <Typography variant="h3">From:</Typography>
            <Typography variant="h3" sx={{marginLeft:"2rem"}}>{starting_place}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"left",my:"2rem"}}>
            <Typography variant="h3">To:</Typography>
            <Typography variant="h3" sx={{marginLeft:"5.3rem"}}>{destination}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"left",my:"2rem"}}>
            <Typography variant="h3">Date:</Typography>
            <Typography variant="h3" sx={{marginLeft:"2.8rem"}}>{new Date(date).toDateString()}</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"left",my:"2rem"}}>
            <Typography variant="h3">Price:</Typography>
            <Typography variant="h3" sx={{marginLeft:"2rem"}}>{price} Birr</Typography>
        </Box>
    </Box>)
}
export default TicketDetail;