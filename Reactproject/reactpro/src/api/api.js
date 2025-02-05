import axios from 'axios';
import { data } from 'react-router-dom';
const url='http://localhost:9000'
export const loginapi = async (data) => {
    try {
        const response=await axios.post(`${url}/Auth/login`,data)
        return response
    } catch (error) {
        return error
    }
}
export const regapi = async (data)=>{
    try {
        const response = await axios.post(`${url}/Auth/register`,data)
        return response
    } catch (error) {
        return error
    }
}