import { useState,useEffect } from "react"
import { Typography,Box,Button,TextField } from "@mui/material"
import SelectComponent from "../../Components/selectComponent"
import DateRangePicker from "../../Components/datePickerRange"
import {postRequest} from '../../utils/request-api'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import swal from "sweetalert";
import busCompanies from "../../utils/busCompanies"
import { places } from "../../utils/places"
import { getClientIpLocation} from "../../utils/request-api"
import { useCookies } from "react-cookie"
import translateWord from "../../utils/languageTranslation"

const customTheme = createTheme({
    palette:{
        primary:{
            main:"#10c9a7",
        },
    }
}) 

export default function BusCompanyForm(){
    const [startingPlace,setStartingPlace] = useState("")
    const [destination,setDestination] = useState("")
    const [busProvider,setBusProvider] = useState("")
    const [ticketPrice,setTicketPrice] = useState("")
    const [departureDateValue,setDepartureDate] = useState("")
    const [starting_placeError,setStartingPlaceError] = useState(false)
    const [destinationError,setDestinationError] = useState(false)
    const [busProviderError,setBusProviderError] = useState(false)
    const [ticketPriceError,setTicketPriceError] = useState(false)
    const [departureDateError,setDepartureDateError] = useState("")
    const [cookie] = useCookies(['lang'])

    useEffect(()=>{
        async function fetchCity(){
                const cityData = await getClientIpLocation()
                const thereIs = places.find(plc=>plc.name===cityData["city"])
                if(thereIs){
                    setStartingPlace(cityData["city"])
                }
        }
        fetchCity()
    },[])

    const submitForm = async(e)=>{
        e.preventDefault()
        if(startingPlace&&destination&&ticketPrice&&busProvider&&departureDateValue){
            try{
                await postRequest("/trip/addTrip",{
                    starting_place:startingPlace,
                    destination,price:parseInt(ticketPrice),busProvider:busProvider,dateFrom:departureDateValue[0],dateUpto:departureDateValue[1]
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
            !busProvider&&setBusProviderError(true)
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
    
    return <Box component={'form'} sx={{width:"80%",margin:"2rem auto"}}>
        <Typography textAlign={"center"} variant="h3" marginBottom={"1rem"}>{translateWord(cookie["lang"],"Add Trips")}</Typography>
        <Box sx={{display:{md:"flex",xs:"block"},justifyContent:{md:"space-evenly",xs:"center"},textAlign:"center"}}>
        {startingPlace&&<Box sx={{paddingRight:{md:destination?"0":"25%"}}}><img src={places.find((plc)=>plc.name===startingPlace).image} height="200" width={"225"} alt={startingPlace} style={{marginRight:"0"}}/></Box>}
        <Box sx={{display:{md:"inline",xs:"none"}}}>{destination&&<img src={places.find((plc)=>plc.name===destination).image} height="200" width={"225"} alt={destination} />}</Box>
     </Box>
        <SelectComponent label={"From"} value={startingPlace} setValue={(e)=>setStartingPlace(e.target.value)} setError={setStartingPlaceError} options={places} error={starting_placeError} fullwidth={false}/>
            <Box sx={{display:{md:"none",xs:"block",textAlign:"center"}}}>{destination&&<img style={{margin:"0 .7rem"}} src={places.find((plc)=>plc.name===destination).image} height="200" width={"225"} alt={destination} />}</Box>
        <SelectComponent label={"To"} value={destination} setValue={(e)=>setDestination(e.target.value)} options={places} error={destinationError} setError={setDestinationError} fullwidth={false} differentFrom={startingPlace}/>
        <DateRangePicker handleChange={handleChange} error={departureDateError}/>
        <SelectComponent label={"Bus Provider"} value={busProvider} setValue={(e)=>setBusProvider(e.target.value)} options={busCompanies} error={busProviderError} setError={setBusProviderError} fullwidth={true}/>
        <ThemeProvider theme={customTheme}>
        <TextField value={ticketPrice} label={translateWord(cookie["lang"],"Ticket Price")} type={"number"} inputProps={{min: 0 }} onChange={(e)=>changeTicketPrice(e.target.value)} error={ticketPriceError} sx={{width:"96%",m:"1rem 0.5rem 2rem",":hover fieldset":{borderWidth:"3px"}}}/>
        </ThemeProvider> 
        <Button type="submit" testbutton="addtrip" onClick={submitForm} variant="contained" sx={{backgroundColor:"#10c9a7",display:"block",margin:"2rem auto",textAlign:"center",":hover":{backgroundColor:"black"}}}>{translateWord(cookie["lang"],"Add")}</Button>
        </Box>
}