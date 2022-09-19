import { useState,useEffect} from "react"
import { Typography,Box,Button } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { useNavigate } from "react-router-dom"
import { places } from "./places"
import DepartureDatePicker from "../../Components/datePicker"
import CustomButton from "../../Components/Button"
import { getClientCoordinates, getClientCityFromCoordinates,getClientIpLocation } from "../../utils/request-api"


export default function PassengerForm({starting_place,destination_place,date,addMargin}){
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate()+1)
    const [startingPlace,setStaringPlace] = useState(starting_place||"")
    const [starting_placeError,setStartingPlaceError] = useState(false)
    const [destination,setDestination] = useState(destination_place||"")
    const [destinationError,setDestinationError] = useState(false)
    const [departureDateValue,setDepartureDate] = useState(date?parseInt(date):tomorrowDate.getTime())
    const [departureDateError,setDepartureDateError] = useState(false)
    const [activeButton,setActiveButton] = useState(0)
    const departureDateButtons = [];
    const navigate = useNavigate()
    const onSuccess = async(pos)=>{
        const {latitude,longitude} = pos.coords
        const location = await getClientCityFromCoordinates(latitude,longitude)
        let city = location["city"]?location["city"].replaceAll("City","").replaceAll("Zone",""):location["locality"]
        city = city.includes(",")?city.substring(0,city.indexOf(",")):city
        setStaringPlace(city)
    }
    useEffect(()=>{
        async function fetchCoordsandLocation(){
            if(!starting_place){
                await getClientCoordinates(onSuccess)
            }
        }
        fetchCoordsandLocation()
    },[starting_place])

    const submitForm = (e)=>{
        e.preventDefault()
        if(startingPlace===""||destination===""||departureDateValue===""){
            startingPlace===""?setStartingPlaceError(true):setStartingPlaceError(false)
            destination===""?setDestinationError(true):setDestinationError(false)
            !departureDateValue?setDepartureDateError(true):setDepartureDateError(false)
            return
        }
        navigate(`/searchResult?starting_place=${startingPlace}&destination=${destination}&date=${departureDateValue}`)
    }

    const setStartingPlaceValue = (starting_place_param)=>{
        setStaringPlace(starting_place_param )
        if(!starting_place_param&&starting_place_param!==""){
            setStartingPlaceError(false)
        }
    }

    const setDestinationPlaceValue = (destination_param)=>{
        setDestination(destination_param)
        if(!destination_param&&destination_param!==""){
            setDestinationError(false)
        }
    }

    const getCardsOfTheWeek = (departureDateButtons)=>{
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate()+1)
        for(let i = 0;i<7;i++){
            const utcTime = nextDay.getTime()
            departureDateButtons.push(<CustomButton key={i} active={activeButton===i} dayOfTheWeek={nextDay.toDateString().substring(0,3)} day={nextDay.toDateString().substring(8,10)} onClick={()=>customButtonClicked(utcTime,i)}/>)
            nextDay.setDate(nextDay.getDate()+1)
        }
        return departureDateButtons;
    }

    const customButtonClicked = (utcTime,ind)=>{
        setDepartureDate(utcTime)
        setActiveButton(ind)
    }
    
    return <Box component={'form'} sx={{width:"80%",margin:"1rem auto 0",paddingBottom:"0rem",zIndex:"0",background:"#f5f5f5"}}>
     <Typography textAlign={"center"} variant="h3" sx={{marginBottom:"1rem",fontSize:{md:"3rem",xs:"2rem"}}}>Search for Trips</Typography>
     <Box sx={{display:{md:"flex",xs:"block"},justifyContent:{md:"space-evenly",xs:"center"},textAlign:"center"}}>
        {startingPlace&&<Box sx={{paddingRight:{md:destination?"0":"25%"}}}><img src={places.find((plc)=>plc.name===startingPlace).image} height="200" width={"225"} alt={startingPlace}/></Box>}
        <Box sx={{display:{md:"inline",xs:"none"}}}>{destination&&<img style={{marginLeft:addMargin?"1rem":"0"}} src={places.find((plc)=>plc.name===destination).image} height="200" width={"225"} alt={destination} />}</Box>
     </Box>
     <SelectComponent label={"Leaving From"} value={startingPlace} setValue={(e)=>setStartingPlaceValue(e.target.value)} options={places} setError={setStartingPlaceError} error={starting_placeError}/>
     <Box sx={{display:{md:"none",xs:"block"},textAlign:"center"}}>{destination&&<img src={places.find((plc)=>plc.name===destination).image} height="200" width={"250"} alt={destination} />}</Box>
     <SelectComponent label={"Destination"} value={destination} setValue={(e)=>setDestinationPlaceValue(e.target.value)} options={places} setError={setDestinationError} error={destinationError}/>
     <DepartureDatePicker value={departureDateValue} setDateValue={setDepartureDate} error={departureDateError}/>
     <Box sx={{display:{md:"flex",xs:"none"},justifyContent:"center",mb:"2rem"}}>
     {getCardsOfTheWeek(departureDateButtons)}
     </Box>
     <Button variant="contained" testbutton={"search_button"} onClick={submitForm} sx={{backgroundColor:"#10c9a7",display:"block",margin:"1rem auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>
        Search
     </Button>
     </Box>
}