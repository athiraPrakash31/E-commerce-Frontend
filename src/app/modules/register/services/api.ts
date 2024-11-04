import axios from "axios";

interface userDataForm {
    username:string;
    email:string;
    password:string;
}
const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const registerApi = async(userData:userDataForm) =>{
    try{
        const response = await axios.post(`${serverURL}/register`,userData);
        return response.data;
    }
    catch(error) {
        console.log(error);
        
    }
}