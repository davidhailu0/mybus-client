import { useState} from "react"
import { Typography,Box,Button } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { useNavigate } from "react-router-dom"
import { places } from "./places"
import DepartureDatePicker from "../../Components/datePicker"
import CustomButton from "../../Components/Button"


export default function PassengerForm({starting_place,destination_place,date}){
    const [startingPlace,setStaringPlace] = useState(starting_place||"")
    const [starting_placeError,setStartingPlaceError] = useState(false)
    const [destination,setDestination] = useState(destination_place||"")
    const [destinationError,setDestinationError] = useState(false)
    const [departureDateValue,setDepartureDate] = useState(date?parseInt(date):null)
    const [departureDateError,setDepartureDateError] = useState(false)
    const departureDateButtons = [];
    const navigate = useNavigate()

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
        for(let i = 0;i<7;i++){
            const utcTime = nextDay.getTime()
            departureDateButtons.push(<CustomButton key={i} dayOfTheWeek={nextDay.toDateString().substring(0,3)} day={nextDay.toDateString().substring(8,10)} onClick={()=>customButtonClicked(utcTime)}/>)
            nextDay.setDate(nextDay.getDate()+1)
        }
        return departureDateButtons;
    }

    const customButtonClicked = (utcTime)=>{
        setDepartureDate(utcTime)
    }
    
    return <Box component={'form'} sx={{width:"50%",margin:"2rem auto"}}>
     <Typography textAlign={"center"} variant="h3">Search for Trips</Typography>
     <SelectComponent label={"Leaving From"} value={startingPlace} setValue={(e)=>setStartingPlaceValue(e.target.value)} options={places} error={starting_placeError}/>
     <SelectComponent label={"Destination"} value={destination} setValue={(e)=>setDestinationPlaceValue(e.target.value)} options={places} error={destinationError}/>
     <DepartureDatePicker value={departureDateValue} setDateValue={setDepartureDate} error={departureDateError}/>
     <Box sx={{display:"flex",justifyContent:"center",mb:"2rem"}}>
     {getCardsOfTheWeek(departureDateButtons)}
     </Box>
     <Button variant="contained" testbutton={"search_button"} onClick={submitForm} sx={{backgroundColor:"#10c9a7",display:"block",margin:"2rem auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>
        Search
     </Button>
</Box>
}