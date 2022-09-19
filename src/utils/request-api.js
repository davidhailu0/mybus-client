import axios from 'axios'

const baseURL = `http://${process.env.REACT_APP_HOST}:9000/api`

export const postRequest = async(endpoint,data,token)=>{
    try{
        const resp = await axios.post(`${baseURL}${endpoint}`,data,{
            headers:{
                authorization_token:token
            }
        })
        return resp.data;
    }
    catch(e){
        return e.message
    }
}

export const getRequest = async(endpoint,token)=>{
    try{
        const resp = await axios.get(`${baseURL}${endpoint}`,{headers:{
            authorization_token:token
        }})
        return resp.data
    }
    catch(e){
        return e.message
    }
}

const failure = ()=>{
    console.warn("Getting the Location Coordinates Failed")
    return "";
}

export const getClientCoordinates = async(success)=>{
    let coordinates = ""
    if(navigator.geolocation){
        const result = await navigator.permissions.query({name:"geolocation"})
        if(result.state === "granted"){
            navigator.geolocation.getCurrentPosition(success)
            return coordinates
        }
        else if(result.state === "prompt"){
            navigator.geolocation.getCurrentPosition(success,failure)
            return coordinates
        }
        return ""
    }
}

export const getClientCityFromCoordinates = async(lat,long)=>{
    const resp = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
    return resp.data
}

const getClientIPv4 = async()=>{
    const ipData = await axios.get("http://jsonip.com")
    return ipData.data["ip"]
}

export const getClientIpLocation = async()=>{
    const API_KEY = "VCZ6ZJqQqmUDYc8nyvf1ZAxqv1r6SGYX";
    const ipAddress = await getClientIPv4()
    const getLocationData = await axios.get(`https://api.apilayer.com/ip_to_location/${ipAddress}`,{headers:{"apikey":`${API_KEY}`}})
    return getLocationData.data["city"]
}