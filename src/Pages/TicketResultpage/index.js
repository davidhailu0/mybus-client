import {useEffect,useState} from "react"
import {Box,Typography} from '@mui/material'
import { useParams } from "react-router-dom"
import { getRequest } from "../../utils/request-api"
import Appbar from "../../Layouts/appbar"
import TicketDetail from "../../Components/TicketDetail"

export default function TicketResultPage(){
    const {ticketId} = useParams();
    const [searchResult,setSearchResult] = useState(null)
    useEffect(()=>{
        async function fetchData(){
            const data = await getRequest(`/ticket/${ticketId}`)
            setSearchResult(data)
        }
       fetchData()
    },[ticketId])

    return (<Box sx={{height:{md:"100vh",xs:"130vh"},background:"#f5f5f5"}}>
    <Appbar/>
    <Box sx={{textAlign:"center",paddingTop:"3rem"}}>
        {searchResult&&searchResult.data!=="No Ticket Found"?<TicketDetail {...searchResult.data}/>:<Typography variant="h3">There is no trip with this ID</Typography>}
    </Box>
    </Box>)
}