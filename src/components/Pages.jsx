import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Pages = () => {
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
       await axios.get('http://localhost:7000/api/handlers/allusers',config).then((res)=>{
      setdata(res.data)
    }).catch((err)=>{
        alert('network error')
    })
  }
  it()
},[])

const send=async (pid)=>{
  const config = {
    headers:{
      Authorization: `Bearer ${user.token}`,
         },
  };
  await axios.put('http://localhost:7000/api/handlers/send',{pid},config)
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))
}


  return (
    <div>
      <h1>pages</h1>
      <>
       {data.map((a)=>(
         <h3 key={a._id}>{a.user}:{user.person.friendlist.includes(a._id)?(<b style={{color:"green"}}>friends</b>):(<button onClick={()=>{send(a._id)}}>send request</button>)}</h3>
       ))}
      </>
    </div>
  )
}

export default Pages