import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import BusCompanyPage from "../Pages/BusCompany";
import TripResultPage from "../Pages/TripResultpage";
import TicketSearchPage from "../Pages/TicketResultpage";

export default function MyBusRoutes(){
    return (<Router>
        <Routes>
            <Route path="/" exact element={<Homepage/>}/>
            <Route path="forBus" element={<BusCompanyPage/>}/>
            <Route path="/searchResult" element={<TripResultPage/>} />
            <Route path="/ticketSearch/:ticketId" element={<TicketSearchPage/>}/>
        </Routes>
    </Router>);
}