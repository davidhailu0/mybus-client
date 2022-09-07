import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import TripResultPage from "../Pages/TripResultpage";
import PassengerForm from "../Layouts/passengerForm";
import BusCompanyForm from "../Layouts/busCompanyForm";
import TicketSearchPage from "../Pages/TicketResultpage";

export default function MyBusRoutes(){
    return (<Router>
        <Routes>
            <Route path="/" element={<Homepage/>}>
                <Route index element={<PassengerForm/>}/>
                <Route path="forBus" element={<BusCompanyForm/>}/>
            </Route>
            <Route path="/searchResult" element={<TripResultPage/>} />
            <Route path="/ticketSearch" element={<TicketSearchPage/>}/>
        </Routes>
    </Router>);
}