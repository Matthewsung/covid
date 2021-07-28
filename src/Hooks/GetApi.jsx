import { useEffect } from "react"
import axios from "axios";
const GetApi = (setCountry,setDate,setTotalConfirm,setTotalDeaths,setNewConfirm,setNewDeaths)=>{
  
  const API = async ()=>{
    const res = await axios.get("https://api.covid19api.com/summary")
    return res
  };
  useEffect(()=>{
    const use_res = API()
    use_res.then((res)=>{
      return res.data
    }).catch(error => console.log(error))    
  },[])
  
  return 
}
export default GetApi 