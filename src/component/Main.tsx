import React, { useEffect, useState  } from 'react';
import axios from "axios";
import ApiCountry from './ApiCountry.js';


const Main =()=>{
  const API = async ()=>{
    const res = await axios.get("https://api.covid19api.com/summary")
      return res
    };
  
  const [country,setCountry] = useState([]) // 전체 데이터
  const [search, setSearch] = useState('') // 검색어
  const [searched, setSearched] = useState([]) // 검색된 나라들
  
  useEffect(() => {
    const use_res = API()
    use_res.then((res) => {
      setCountry(res.data.Countries)
    })
    .catch(error => console.log(error))
  },[])

  const onChangeInput = (e : any) :void => {
    setSearch(e.target.value)
  }

  const onSubmitForm = (e : any) => {
    e.preventDefault();
    setSearched(country.filter((value : any) =>  value.Country.toLowerCase().includes(search)))
  }
  return(
    <>
      <div className="container" >
        <form onSubmit={onSubmitForm}>
          <input 
            type='text' 
            placeholder='국가를 검색해보세요' 
            onChange={onChangeInput}
          />
          <button>
            찾기
          </button>
        </form>
        <ul className='country_ul'>
          {
            searched.length === 0 ?
            country.map((v,i)=> <ApiCountry key={i+v} country={v}/>):
            searched.map((v,i)=> <ApiCountry key={i+v} country={v}/>)
          }
        </ul>
      </div>
    </>
  )
}





export default Main