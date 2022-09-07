import { useState } from "react"
import { Typography,Box,Button,TextField } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { places } from "../passengerForm/places"
import DateRangePicker from "../../Components/datePickerRange"
import {postRequest} from '../../utils/request-api'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#10c9a7",
        },
    }
}) 

export default function BusCompanyForm(){
    const [startingPlace,setStaringPlace] = useState("")
    const [destination,setDestination] = useState("")
    const [ticketPrice,setTicketPrice] = useState("")
    const [departureDateValue,setDepartureDate] = useState(null)

    const submitForm = async(e)=>{
        e.preventDefault()
        const respData = await postRequest("/trip/addTrip",{
            starting_place:startingPlace,
            destination,price:ticketPrice,dateFrom:departureDateValue[0],dateUpto:departureDateValue[1]
        },null)
        console.log(respData)
    }

    const handleChange = (range)=>{
        setDepartureDate(range)
    }
    
    return <Box component={'form'} sx={{width:"70%",margin:"2rem auto"}}>
        <Typography textAlign={"center"} variant="h3">Add Trips</Typography>
        <SelectComponent label={"Leaving From"} value={startingPlace} setValue={(e)=>setStaringPlace(e.target.value)} options={places}/>
        <SelectComponent label={"Destination"} value={destination} setValue={(e)=>setDestination(e.target.value)} options={places}/>
        <DateRangePicker handleChange={handleChange}/>
        <ThemeProvider theme={customTheme}>
        <TextField value={ticketPrice} label={"Ticket Price"} type={"number"} inputProps={{min: 0 }} onChange={(e)=>setTicketPrice(e.target.value)} sx={{width:"96%",m:"1rem 0.5rem 2rem",":hover fieldset":{borderWidth:"3px"}}}/>
        </ThemeProvider> 
        <Button type="submit" testbutton="addtrip" onClick={submitForm} variant="contained" sx={{backgroundColor:"#10c9a7",display:"block",margin:"2rem auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>Add</Button>
        </Box>
}