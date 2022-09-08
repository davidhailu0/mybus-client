import {useEffect,useState} from "react"
import {Box,Typography} from '@mui/material'
import { useSearchParams } from "react-router-dom"
import { getRequest } from "../../utils/request-api"
import Appbar from "../../Layouts/appbar"
import PassengerForm from "../../Layouts/passengerForm";
import ResultCard from "../../Components/resultCard";

export default function ResultPage(){
    const [searchParams] = useSearchParams()
    const [routeData,setRouteData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const data = await getRequest(`/trip?starting_place=${searchParams.get("starting_place")}&destination=${searchParams.get("destination")}&date=${searchParams.get("date")}`)
            setRouteData(data)
        }
        fetchData()
    },[searchParams])

    return (<Box sx={{height:"100vh",background:"#f5f5f5"}}>
        <Appbar/>
        <Box sx={{display:{md:"flex",xs:"grid",position:"fixed",top:"3rem",right:"0.5rem",left:"0.5rem",bottom:"1rem"}}}>
            <PassengerForm starting_place={searchParams.get("starting_place")} destination_place={searchParams.get("destination")} date={searchParams.get("date")}/>
            <Box sx={{overflowY:"scroll",mt:"2rem",textAlign:"center",width:"50vw",background:"white",borderRadius:"25px"}}>
                <Typography variant="h3">Search Result</Typography>
                {routeData.length===0?<Typography variant="h4" sx={{marginTop:"15rem",height:"100%"}}>No Trips Found</Typography> :routeData.map((routeObj,ind)=><ResultCard key={ind} {...routeObj} date={searchParams.get("date")}/>)}
            </Box>
        </Box>
    </Box>)
}