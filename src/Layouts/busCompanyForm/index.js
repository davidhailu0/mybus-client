import { useState } from "react"
import { Typography,Box,Button,TextField } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { places } from "../passengerForm/places"
import DateRangePicker from "../../Components/datePickerRange"
import CustomButton from "../../Components/Button"
import {postRequest} from '../../utils/request-api'

const getCardsOfTheWeek = (departureDateButtons)=>{
    const nextDay = new Date();
    for(let i = 0;i<7;i++){
        console.log(nextDay.getMilliseconds())
        departureDateButtons.push(<CustomButton key={i} dayOfTheWeek={nextDay.toDateString().substring(0,3)} day={nextDay.toDateString().substring(8,10)}/>)
        nextDay.setDate(nextDay.getDate()+1)
    }
    return departureDateButtons;
}

export default function BusCompanyForm(){
    const [startingPlace,setStaringPlace] = useState("")
    const [destination,setDestination] = useState("")
    const [ticketPrice,setTicketPrice] = useState("")
    const [departureDateValue,setDepartureDate] = useState(null)
    const departureDateButtons = [];

    const submitForm = async(e)=>{
        e.preventDefault()
        const respData = await postRequest("busCompany/addTrip",{
            starting_place:startingPlace,
            destination,price:ticketPrice,date:departureDateValue
        },null)
        console.log(respData)
    }

    const handleChange = (range)=>{
        console.log(range)
    }
    
    return <Box component={'form'} sx={{width:"70%",margin:"2rem auto"}}>
     <Typography textAlign={"center"} variant="h3">Add Trips</Typography>
     <SelectComponent label={"Leaving From"} value={startingPlace} setValue={(e)=>setStaringPlace(e.target.value)} options={places}/>
     <SelectComponent label={"Destination"} value={destination} setValue={(e)=>setDestination(e.target.value)} options={places}/>
     <DateRangePicker handleChange={handleChange}/> 
     <TextField value={ticketPrice} label={"Ticket Price"} onChange={(e)=>setTicketPrice(e.target.value)} sx={{width:"96%",m:"1rem 0.5rem 2rem",":hover fieldset":{borderWidth:"3px"}}}/>
     <Box sx={{display:"flex",justifyContent:"center",mb:"2rem"}}>
     {getCardsOfTheWeek(departureDateButtons)}
     </Box>
     <Button type="submit" onClick={submitForm} variant="contained" sx={{backgroundColor:"#10c9a7",display:"block",margin:"auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>Add</Button>
    </Box>
}