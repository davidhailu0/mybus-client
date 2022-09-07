import axios from 'axios'

const baseURL = "http://localhost:9000/api"

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