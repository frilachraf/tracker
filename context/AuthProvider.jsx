import { createContext, useContext, useEffect, useState } from "react";
// import { getCurrentUser } from "../lib/appwrite";
import getCurrentUser from '../utils/appwrite'
const GlobalContext = createContext();
export const useGloBalContext = ()=> useContext(GlobalContext)
export default AuthProvider = ({children})=>{
    // const [isLoggedIn, setisLoggedIn] = useState(false);
    // const [user, setUser] = useState(null);
    // const [isLoading, setisLoading] = useState(true);
    useEffect(()=>{
        // getCurrentUser()
        // .then((res)=>{
        //     if(res){
        //         setisLoggedIn(true);
        //         setUser(res)
        //     }
        //     else{
        //         setisLoggedIn(false)
        //         setUser(null)
        //     }
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
        // .finally(()=>{
        //     setisLoading(false)
        // })
    },[])
    return (
        // <GlobalContext.Provider 
        // value={{
        //     isLoggedIn,setisLoggedIn,user,setUser,isLoading
        // }}
        // >
        //     {children}
        // </GlobalContext.Provider>
        {children}
    )
}