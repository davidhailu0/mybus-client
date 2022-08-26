import { useState } from "react"
import { Typography,Box,Button,TextField } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { places } from "../passengerForm/places"
import DepartureDatePicker from "../../Components/datePicker"
import CustomButton from "../../Components/Button"
import '../passengerForm/passengerForm.css'

const getCardsOfTheWeek = (departureDateButtons)=>{
    const nextDay = new Date();
    for(let i = 0;i<7;i++){
        departureDateButtons.push(<CustomButton key={i} dayOfTheWeek={nextDay.toDateString().substring(0,3)} day={nextDay.toDateString().substring(8,10)}/>)
        nextDay.setDate(nextDay.getDate()+1)
    }
    return departureDateButtons;
}

export default function BusCompanyForm(){
    const [startingPlace,setStaringPlace] = useState("Addis Ababa")
    const [destination,setDestination] = useState("Addis Ababa")
    const [ticketPrice,setTicketPrice] = useState()
    const [departureDateValue,setDepartureDate] = useState(null)
    const departureDateButtons = [];
    
    return <Box component={'form'} className="passengerForm_container">
     <Typography textAlign={"center"} variant="h3">Add Trips</Typography>
     <SelectComponent label={"Leaving From"} value={startingPlace} setValue={setStaringPlace} options={places}/>
     <SelectComponent label={"Destination"} value={destination} setValue={setDestination} options={places}/>
     <DepartureDatePicker value={departureDateValue} setDateValue={setDepartureDate}/>
     <TextField value={ticketPrice} label={"Ticket Price"} onChange={setTicketPrice} sx={{width:"96%",m:"1rem 0.5rem 2rem"}}/>
     <Box sx={{display:"flex",justifyContent:"center",mb:"2rem"}}>
     {getCardsOfTheWeek(departureDateButtons)}
     </Box>
     <Button type="submit" variant="contained" sx={{backgroundColor:"#2fe6c8",display:"block",margin:"auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>Add</Button>
    </Box>
}