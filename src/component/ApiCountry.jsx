import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const ApiCountry = ({country})=>{
  
  return(    
    <li className='country_li' >
      <Link to={{
        pathname:`/covid/${country.Country}`,
        state:{country}
      }} >
       {country.Country}
      </Link>
    </li>
  )
}
export default ApiCountry