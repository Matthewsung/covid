import { useState, useEffect } from "react"
import axios from "axios";
const Total = ()=>{
  
  const [date,setDate] = useState(0)
  const [totalConfirm, setTotalConfirm] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [newConfirm, setNewConfirm] = useState(0)
  const [newDeaths, setNewDeaths] = useState(0)
  const API = async ()=>{
    const res = await axios.get("https://api.covid19api.com/summary")
    return res
  };
  useEffect(()=>{
    const use_res = API()
    use_res.then((res)=>{
      return res.data.Global
    }).catch(error => console.log(error))
    .then(res => {
      setDate(res.Date.split('T')[0])
      setTotalConfirm(res.TotalConfirmed)
      setTotalDeaths(res.TotalDeaths)
      setNewConfirm(res.NewConfirmed)
      setNewDeaths(res.NewDeaths)
    })
    
  },[])
  
  return (
    <>
      <div className='total_box'>
        <h1>기준일 : {date}</h1>
        <h2>총 확진자수 : {totalConfirm.toLocaleString()}</h2>
        <h2>총 사망자수 : {totalDeaths.toLocaleString()}</h2>
        <h2>금일 확진자수 : {newConfirm.toLocaleString()}</h2>
        <h2>금일 사망자수 : {newDeaths.toLocaleString()}</h2>
      </div>
      
    </>
  )
}
export default Total