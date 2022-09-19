import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../../Layouts/appbar';
import PassengerForm from '../../Layouts/passengerForm';
import SearchBar from '../../Components/Searchfield';
import { Box } from '@mui/system';

export default function Homepage(){
    const [searchValue,setSearchValue] = useState("")
    const [searchBarError,setSearchBarError] = useState(false)
    const navigate = useNavigate()

    const searchForTicket = ()=>{
        if(searchValue!==""){
            navigate(`/ticketSearch/${searchValue}`)
        }
       else{
            setSearchBarError(true)
       }
    }
    return (<Box sx={{background:"#f5f5f5",height:{md:"130vh",xs:"110vh"}}}>
        <ResponsiveAppBar/>
          <SearchBar callBackOnSearch={searchForTicket} setSearchValue={setSearchValue} setError={setSearchBarError} error={searchBarError}/>
        <PassengerForm addMargin={true}/>
    </Box>)
}