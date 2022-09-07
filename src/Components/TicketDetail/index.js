import {Box,Typography} from "@mui/material"

const TicketDetail = ({_id,starting_place,destination,date,price})=>{
    return (<Box>
        <div>
            <Typography>From:</Typography>
            <Typography>{starting_place}</Typography>
        </div>
    </Box>)
}
export default TicketDetail;