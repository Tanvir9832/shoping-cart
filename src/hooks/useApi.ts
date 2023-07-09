import axios from "axios";
import {useEffect , useState} from "react"



export default function useApi(url : string) {
    const [loading , setLoading] = useState< boolean>(false);
    const [data , setData] = useState< any >(null)
    const [error , setError] = useState< string | null>(null)


    async function apiCall(){
        setLoading(true);
        try {
            const res = await axios.get(url);
            setLoading(false);
            setData(res);
        } catch (error : any) {
            setLoading(false);
            setError(error);
        }
       
    }

    useEffect(() => {
        apiCall();
    },[])

    return [loading ,  data , error];
}