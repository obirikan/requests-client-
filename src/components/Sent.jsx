import React,{useEffect, useState} from 'react'
import Nav from './Nav'
import axios from 'axios'

const Sent = () => {
    const [data,setdata]=useState([])
    const [user,setuser]=useState()

    useEffect(()=>{
        const it=async()=>{
        const user = JSON.parse(localStorage.getItem("info"));
        setuser(user)
        const config = {
          headers:{
            Authorization: `Bearer ${user.token}`,
               },
        };
           await axios.get('http://localhost:7000/api/handlers/sentrequests',config).then((res)=>{
          setdata(res.data)
        }).catch((err)=>{
            alert('network error')
        })
      }
      it()
    },[])

    const withdraw=async(id)=>{
        const user=JSON.parse(localStorage.getItem('info'))
        const token=user.token
        const config={
          headers:{
            Authorization:`Bearer ${user.token}`
          }
      }
       await axios.put('http://localhost:7000/api/handlers/unsend',{id},config).then(res=>{
       let data1=res.data
       data1={...data1,token}
       localStorage.setItem("info",JSON.stringify(data1))
       setuser(data1)
    //    settoken(data1.token)})
    }).catch((error)=>{
       console.log(error)
      })
    }

  return (
    <div>
        <h1>sent request</h1>
        <><Nav/></>
        <>
        {data.map((a)=>(
         <h3 key={a._id}>
          {a.user}{user.sendRequest.includes(a._id)?<button onClick={()=>{withdraw(a._id)}}>withdraw</button>:'removed'}
        </h3>
       ))}</>
    </div>
  )
}

export default Sent