import ResponsiveAppBar from '../../Layouts/appbar';
import BusCompanyForm from '../../Layouts/busCompanyForm';
import {Box} from "@mui/material"

export default function Buscompanypage(){
    return (<Box sx={{background:"#f5f5f5",height:{md:"110vh",xs:"170vh"}}}>
        <ResponsiveAppBar/>
        <BusCompanyForm/>
    </Box>);
}