import { useState } from "react"
import { Typography,Box,Button } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { places } from "./places"
import DepartureDatePicker from "../../Components/datePicker"
import CustomButton from "../../Components/Button"
import './passengerForm.css'

const getCardsOfTheWeek = (departureDateButtons)=>{
    const nextDay = new Date();
    for(let i = 0;i<7;i++){
        departureDateButtons.push(<CustomButton key={i} dayOfTheWeek={nextDay.toDateString().substring(0,3)} day={nextDay.toDateString().substring(8,10)}/>)
        nextDay.setDate(nextDay.getDate()+1)
    }
    return departureDateButtons;
}

export default function PassengerForm(){
    const [startingPlace,setStaringPlace] = useState("Addis Ababa")
    const [destination,setDestination] = useState("Addis Ababa")
    const [departureDateValue,setDepartureDate] = useState(null)
    const departureDateButtons = [];
    
    return <Box component={'form'} className="passengerForm_container">
     <Typography textAlign={"center"} variant="h3">Search for Trips</Typography>
     <SelectComponent label={"Leaving From"} value={startingPlace} setValue={setStaringPlace} options={places}/>
     <SelectComponent label={"Destination"} value={destination} setValue={setDestination} options={places}/>
     <DepartureDatePicker value={departureDateValue} setDateValue={setDepartureDate}/>
     <Box sx={{display:"flex",justifyContent:"center",mb:"2rem"}}>
     {getCardsOfTheWeek(departureDateButtons)}
     </Box>
     <Button type="submit" variant="contained" sx={{backgroundColor:"#2fe6c8",display:"block",margin:"auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>Search</Button>
    </Box>
}