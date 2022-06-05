import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { BrowserRouter,Router, } from 'react-router-dom'
import Nav from './Nav'

const Pages = () => {
const [data,setdata]=useState([])
const [user,setuser]=useState()
const [status,setstatus]=useState(true)
const [tok,settok]=useState()

useEffect(()=>{
    const it=async()=>{
    const user = JSON.parse(localStorage.getItem("info"));
    const {person,token}=user
     settok(token)
    setuser(person)
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
      Authorization: `Bearer ${tok}`,
         },
  };
  await axios.put('http://localhost:7000/api/handlers/send',{pid},config)
  .then((res)=>
  setuser(res.data),
  )
  .catch((err)=>console.log(err.response.data.msg))
}

const accept=async (id)=>{
  const config = {
    headers:{
      Authorization: `Bearer ${tok}`,
         },
  };
  await axios.put('http://localhost:7000/api/handlers/acceptRequest',{id},config)
  .then((res)=>
  setuser(res.data),
  )
  .catch((err)=>console.log(err.response.data.msg))
}


  return (
    <div>
      <h1>pages</h1>
      <Nav/>
      <>
       {data.map((a)=>(
         <h3 key={a._id}>
           {a.user}:{user.friendlist.includes(a._id)?(<b style={{color:"green"}}>friends</b>)
           :(user.sendRequest.includes(a._id)?(<b style={{color:"tomato"}}>pending</b>)
           :user.Requests.includes(a._id)?(<button onClick={()=>{accept(a._id)}}>accept request</button>):(<button onClick={()=>{send(a._id)}}>send request</button>))}</h3>
       ))}
      </>
    </div>
  )
}

export default Pages