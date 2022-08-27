import { useState } from "react"
import { Typography,Box,Button } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { places } from "./places"
import DepartureDatePicker from "../../Components/datePicker"
import CustomButton from "../../Components/Button"
import { getRequest } from "../../utils/request-api"

const getCardsOfTheWeek = (departureDateButtons)=>{
    const nextDay = new Date();
    for(let i = 0;i<7;i++){
        departureDateButtons.push(<CustomButton key={i} dayOfTheWeek={nextDay.toDateString().substring(0,3)} day={nextDay.toDateString().substring(8,10)}/>)
        nextDay.setDate(nextDay.getDate()+1)
    }
    return departureDateButtons;
}

export default function PassengerForm(){
    const [startingPlace,setStaringPlace] = useState("")
    const [destination,setDestination] = useState("")
    const [departureDateValue,setDepartureDate] = useState(null)
    const departureDateButtons = [];

    const submitForm = async (e)=>{
        e.preventDefault()
        const respData = await getRequest(`?starting_place=${startingPlace}&destination=${destination}&date=${departureDateValue}`)
        console.log(respData)
    }
    
    return <Box component={'form'} sx={{width:{xs:"100%",md:"50%"},mt:"2rem"}}>
     <Typography textAlign={"center"} variant="h3">Search for Trips</Typography>
     <SelectComponent label={"Leaving From"} value={startingPlace} setValue={(e)=>setStaringPlace(e.target.value)} options={places}/>
     <SelectComponent label={"Destination"} value={destination} setValue={(e)=>setDestination(e.target.value)} options={places}/>
     <DepartureDatePicker value={departureDateValue} setDateValue={setDepartureDate}/>
     <Box sx={{display:"flex",justifyContent:"center",mb:"2rem"}}>
     {getCardsOfTheWeek(departureDateButtons)}
     </Box>
     <Button type="submit" variant="contained" onClick={submitForm} sx={{backgroundColor:"#2fe6c8",display:"block",margin:"auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>Search</Button>
    </Box>
}