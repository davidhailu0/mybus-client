import {useEffect,useState} from "react"
import {Box,Typography} from '@mui/material'
import { useParams } from "react-router-dom"
import { getRequest } from "../../utils/request-api"
import Appbar from "../../Layouts/appbar"

export default function TicketResultPage(){
    const {ticketId} = useParams;
    const [searchResult,setSearchResult] = useState(null)
    useEffect(()=>{
        async function fetchData(){
            const data = await getRequest(`/ticket/${ticketId}`)
            setSearchResult(data)
        }
       fetchData()
    },ticketId)

    return (<>
    <Appbar/>
    </>)
}