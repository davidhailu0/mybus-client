import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ResultPage from "../Pages/Resultpage";
import PassengerForm from "../Layouts/passengerForm";
import BusCompanyForm from "../Layouts/busCompanyForm";

export default function MyBusRoutes(){
    return (<Router>
        <Routes>
            <Route path="/" element={<Homepage/>}>
                <Route index element={<PassengerForm/>}/>
                <Route path="forBus" element={<BusCompanyForm/>}/>
            </Route>
            <Route path="/searchResult" element={<ResultPage/>} />
        </Routes>
    </Router>);
}