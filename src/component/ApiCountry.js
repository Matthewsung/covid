import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ApiCountry = ({country})=>{
  const [data, setData] = useState({})

  useEffect(()=> {
    setData(country)
  },[country])
  
  return(    
    <li className='country_li' >
      <Link to={{
        pathname:`/covid/${data.Country}`,
        state:{data}
      }} >
       {data.Country}
      </Link>
    </li>
  )
}
export default ApiCountry