
import axios from "axios";

interface loginDataForm {
    email:string;
    password:string;
}
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const loginApi = async(userData:loginDataForm) =>{
    try{
        const response = await axios.post(`${serverURL}/login`,userData);
        return response.data;
    }
    catch(error) {
        console.log(error);
        
    }
}