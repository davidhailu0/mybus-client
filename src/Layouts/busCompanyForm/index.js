import { useState,useEffect } from "react"
import { Typography,Box,Button,TextField } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import { places } from "../passengerForm/places"
import DateRangePicker from "../../Components/datePickerRange"
import {postRequest} from '../../utils/request-api'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from "sweetalert";
import { getClientIPAddress,getRequestIPInfoRequest } from "../../utils/request-api"

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
    const [departureDateValue,setDepartureDate] = useState("")
    const [starting_placeError,setStartingPlaceError] = useState(false)
    const [destinationError,setDestinationError] = useState(false)
    const [ticketPriceError,setTicketPriceError] = useState(false)
    const [departureDateError,setDepartureDateError] = useState("")

    useEffect(()=>{
        async function fetchIPandLocation(){
                const ipData = await getClientIPAddress()
                const ipLocation = await getRequestIPInfoRequest(ipData['ip'])
                setStaringPlace(ipLocation["region_name"])
        }
        fetchIPandLocation()
    },[])

    const submitForm = async(e)=>{
        e.preventDefault()
        if(startingPlace&&destination&&ticketPrice&&departureDateValue){
            try{
                await postRequest("/trip/addTrip",{
                    starting_place:startingPlace,
                    destination,price:ticketPrice,dateFrom:departureDateValue[0],dateUpto:departureDateValue[1]
                },null)
                swal("Success!", "Your Trip has been added!", "success");
            }
            catch(e){
                swal("Oops!", "Something went wrong!", "error");
                console.error(e.message)
            }
        }
        else{
            !startingPlace&&setStartingPlaceError(true);
            !destination&&setDestinationError(true)
            !ticketPrice&&setTicketPriceError(true)
            !departureDateValue&&setDepartureDateError("error")
        }
    }

    const handleChange = (range)=>{
        setDepartureDate(range)
        setDepartureDateError("")
    }

    const changeTicketPrice = (val)=>{
        setTicketPrice(val)
        setTicketPriceError(false)
    }
    
    return <Box component={'form'} sx={{width:"70%",margin:"2rem auto"}}>
        <Typography textAlign={"center"} variant="h3" marginBottom={"1rem"}>Add Trips</Typography>
        <Box sx={{display:startingPlace&&!destination?"block":"flex",justifyContent:"space-evenly"}}>
        {startingPlace&&<img style={{margin:"0 2.5rem"}} src={places.find((plc)=>plc.name===startingPlace).image} height="200" width={"295"} alt={startingPlace} />}
        <Box sx={{display:{md:"inline",xs:"none"}}}>{destination&&<img style={{margin:"0 .7rem"}} src={places.find((plc)=>plc.name===destination).image} height="200" width={"295"} alt={destination} />}</Box>
        </Box>
        <SelectComponent label={"Leaving From"} value={startingPlace} setValue={(e)=>setStaringPlace(e.target.value)} setError={setStartingPlaceError} options={places} error={starting_placeError}/>
            <Box sx={{display:{md:"none",xs:"block",textAlign:"center"}}}>{destination&&<img style={{margin:"0 .7rem"}} src={places.find((plc)=>plc.name===destination).image} height="200" width={"295"} alt={destination} />}</Box>
        <SelectComponent label={"Destination"} value={destination} setValue={(e)=>setDestination(e.target.value)} options={places} error={destinationError} setError={setDestinationError}/>
        <DateRangePicker handleChange={handleChange} error={departureDateError}/>
        <ThemeProvider theme={customTheme}>
        <TextField value={ticketPrice} label={"Ticket Price"} type={"number"} inputProps={{min: 0 }} onChange={(e)=>changeTicketPrice(e.target.value)} error={ticketPriceError} sx={{width:"96%",m:"1rem 0.5rem 2rem",":hover fieldset":{borderWidth:"3px"}}}/>
        </ThemeProvider> 
        <Button type="submit" testbutton="addtrip" onClick={submitForm} variant="contained" sx={{backgroundColor:"#10c9a7",display:"block",margin:"2rem auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>Add</Button>
        </Box>
}