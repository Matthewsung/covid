import React,{useEffect, useLocation, useState} from 'react';
import axios from 'axios';
import { Bar,Doughnut, Line } from 'react-chartjs-2';

const Graph = ({data})=>{
  const countryCode = data.CountryCode.toLowerCase()
  const [confirmedData,setConfirmedData]= useState({})
  const [quarantinedData, setQuarantinedData] = useState({})
  const [comparedData, setComparedData] = useState({})
  useEffect(()=>{
    const fetchEvents = async ()=>{
      const Api = await axios.get(`https://api.covid19api.com/total/dayone/country/${countryCode}`)
      makeData(Api.data)
    }
    const makeData =(items)=>{
      // console.log(items)
      const arr = items.reduce((acc,cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()
        const date = currentDate.getDate()
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Deaths;
        const recovered = cur.Recovered;
        const findItem = acc.find( a=> a.year === year && a.month === month)
        if(!findItem){
          acc.push({year, month , date , confirmed , active , death , recovered})
        }
        if(findItem && findItem.date < date){
          findItem.active = active;
          findItem.death = death;
          findItem.date = date;
          findItem.year = year;
          findItem.month = month;
          findItem.recovered = recovered;
          findItem.confirmed = confirmed;
        }
        return acc;
      },[])
      const labels = arr.map(v => `${v.year} ${v.month +1}월`)
      setConfirmedData({
        labels,
        datasets : 
        [
          {
            label:"국내 누적 확진자",
            backgroundColor:"salmon",
            fill:"true",
            data: arr.map(v=>v.confirmed)
          }
        ]
      })
      setQuarantinedData({
        labels,
        datasets : 
        [
          {
            label:"월별 격리자 현황",
            borderColor:"salmon",
            fill:false,
            data: arr.map(v=>v.active)
          }
        ]
      })
      const last = arr[arr.length-1]
      setComparedData({
        labels:["확진자","격리해제","사망"],
        datasets : 
        [
          {
            label:"누적 확진, 해제, 사망비율",
            backgroundColor:["#ff3d67","#059bff","#ffc233"],
            borderColor:["#ff3d67","#059bff","#ffc233"],
            fill:false,
            data: [last.confirmed, last.recovered, last.death]
          }
        ]
      })
      // console.log(arr)
    }
    fetchEvents()
  },[])

console.log(data.Country)

  return(
    <section>
      <h2>{data.Country}의 코로나 현황</h2>
      <div className="contents">
        <div>
          <Bar data={confirmedData} options={
            { title: {display : true, text : '누적 확진자 추이', fontSize : 16 } },
            { legend: { display:true, position:'right' }}
          } /> 
        </div>
        <div>
          <Line data={quarantinedData} options={
            { title: {display : true, text : '월별 격리자 추이', fontSize : 16 } },
            { legend: { display:true, position:'right' }}
          } /> 
        </div>
        <div>
          <Doughnut data={comparedData} options={
            { title: {display : true, text : `누적 확진, 해제, 사망 ( ${ new Date().getMonth()+1 }월)`, fontSize : 16 } },
            { legend: { display:true, position:'right' }}
          } /> 
        </div>
      </div>
    </section>
    )
}

export default Graph