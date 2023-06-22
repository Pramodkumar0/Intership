import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Single = () => {
    const [data,setData]=useState("")
    useEffect(()=>{
        axios.get("https://api.chucknorris.io/jokes/categories")
        .then((json)=>setData(json.data))
    },[])
  return (
    <div>Single
        {
            data&& data.map((item)=>{
                return(
                    <h6>{item.animal}</h6>
                )
            })
        }
    </div>
  )
}

export default Single