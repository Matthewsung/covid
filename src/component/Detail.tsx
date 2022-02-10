import React, { useState, useEffect  } from 'react';
import { useLocation } from 'react-router-dom';
import Graph from './Graph.js'

interface TypeData {
  Country: string
  CountryCode: string
  Date: string
  ID: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  Premium: object
  Slug: string
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}

const Detail = ()=>{

  const choose : any = useLocation().state
  const [data, setData] = useState<TypeData>()
  useEffect(() => {
    setData(choose.data)
  },[data])

  return(
    <div className="w_1440">
      <table>
        <tbody>
          <tr className="d_tr">
            <td className="d_td">
              나라
            </td>
            <td className="d_td">
              금일 확진자
            </td>
            <td className="d_td">
              금일 사망자
            </td>
            <td className="d_td">
              총 확진자
            </td>
            <td className="d_td">
              총 사망자
            </td>
          </tr>
          <tr className="d_tr">
            <td className="d_td">
              {data?.Country}
            </td>
            <td className="d_td">
              {data?.NewConfirmed}
            </td>
            <td className="d_td">
              {data?.NewDeaths}
            </td>
            <td className="d_td">
              {data?.TotalConfirmed}
            </td>
            <td className="d_td">
              {data?.TotalDeaths}
            </td>
          </tr>
        </tbody>
      </table>
      <Graph 
        data = {data}
      />
      
    </div>
  )
}
export default Detail
