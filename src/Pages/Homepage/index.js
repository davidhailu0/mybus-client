import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../../Layouts/appbar';

export default function Homepage(){
    return (<>
        <ResponsiveAppBar/>
        <Outlet/>
    </>)
}