import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";

export default function MyBusRoutes(){
    return (<Router>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    </Router>);
}