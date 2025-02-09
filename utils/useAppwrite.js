import { useEffect, useState } from "react";
import { Alert } from "react-native";

const  useAppwrite = (fn) =>{
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    const fetchData = async ()=>{
        setIsLoading(true)
        try {
        const response = await fn()
        setData(response)
        
        } catch (error) {
        // Alert.alert('Error e',error.message)
        console.log("use App write hook message with function ",error)
        }
        finally{
        setIsLoading(false)
        }
    }
    const refetch = () => fetchData()
    
    useEffect(() => {
        fetchData()
    }, [])
    return { data, isLoading,refetch };

}
export default useAppwrite