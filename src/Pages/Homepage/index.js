import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import ResponsiveAppBar from '../../Layouts/appbar';
import PassengerForm from '../../Layouts/passengerForm';
import SearchBar from '../../Components/Searchfield';

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
    return (<>
        <ResponsiveAppBar/>
          <SearchBar callBackOnSearch={searchForTicket} setSearchValue={setSearchValue} error={searchBarError}/>
        <PassengerForm/>
    </>)
}