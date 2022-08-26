import {Box} from '@mui/material'
import Appbar from '../../Components/appbar';
import PassengerForm from '../passengerForm';
import BusCompanyForm from '../busCompanyForm';
import "./header.css";

export default function Header(){
    return (<>
    <Appbar/>
    <Box sx={{display:{md:"flex",xs:"grid"}}}>
    <PassengerForm/>
    <BusCompanyForm/>
    </Box>
    </>)
}