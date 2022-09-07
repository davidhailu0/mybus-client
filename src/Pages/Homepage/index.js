import ResponsiveAppBar from '../../Layouts/appbar';
import PassengerForm from '../../Layouts/passengerForm';
import SearchBar from '../../Components/Searchfield';

export default function Homepage(){
    return (<>
        <ResponsiveAppBar/>
        <SearchBar/>
        <PassengerForm/>
    </>)
}