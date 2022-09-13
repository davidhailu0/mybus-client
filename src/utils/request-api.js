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

export const getRequestIPInfoRequest = async(ip)=>{
    const API_KEY = "9b3042f61312ef78b3e28fe615d42dac"
    try{
        const resp = await axios.get(`http://api.ipstack.com/${ip}?access_key=${API_KEY}`)
        return resp.data
    }
    catch(e){
        console.log(e.message)
    }
}

export const getClientIPAddress = async()=>{
    const resp = await axios.get(`https://jsonip.com/`)
    return resp.data
}