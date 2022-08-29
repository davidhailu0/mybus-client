import {useEffect,useState} from "react"
import {Box} from '@mui/material'
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
            const data = await getRequest(`?starting_place=${searchParams.get("starting_place")}&destination=${searchParams.get("destination")}&date=${searchParams.get("date")}`)
            setRouteData(data)
        }
        fetchData()
    },[searchParams])
    return (<>
        <Appbar/>
        <Box sx={{display:{md:"flex",xs:"grid",position:"fixed",top:"3rem",right:"0.5rem",left:"0.5rem",bottom:"1rem"}}}>
            <PassengerForm starting_place={searchParams.get("starting_place")} destination_place={searchParams.get("destination")} date={searchParams.get("date")}/>
            <Box sx={{overflowY:"scroll"}}>
                {routeData.map((routeObj)=><ResultCard {...routeObj}/>)}
            </Box>
        </Box>
    </>)
}