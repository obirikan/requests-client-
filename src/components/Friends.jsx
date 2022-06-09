import React,{useEffect,useState} from 'react'
import Nav from './Nav'
import axios from 'axios'

const Friends = () => {
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
           await axios.get('http://localhost:7000/api/handlers/friends',config).then((res)=>{
          setdata(res.data)
        }).catch((err)=>{
            alert('network error')
        })
      }
      it()
    },[])
  return (
    <div>
        <h1>Friendlist</h1>
        <><Nav/></>
        <>
        {data.map((a)=>(
         <h3 key={a._id}>
           {a.user}{user.friendlist.includes(a._id)&&<button>withdraw</button>}
        </h3>
       ))}</>
    </div>
  )
}

export default Friends