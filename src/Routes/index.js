import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import TicketResultPage from "../Pages/TripResultpage";
import PassengerForm from "../Layouts/passengerForm";
import BusCompanyForm from "../Layouts/busCompanyForm";

export default function MyBusRoutes(){
    return (<Router>
        <Routes>
            <Route path="/" element={<Homepage/>}>
                <Route index element={<PassengerForm/>}/>
                <Route path="forBus" element={<BusCompanyForm/>}/>
            </Route>
            <Route path="/searchResult" element={<TicketResultPage/>} />
            <Route path="/ticketSearch" element={<TicketResultPage/>}/>
        </Routes>
    </Router>);
}