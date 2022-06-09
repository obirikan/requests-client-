import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { Item } from '../context/Context'
import Nav from './Nav'

const Pages = () => {
let [data,setdata]=useState([])
let [person,setperson]=useState()
let [token,settoken]=useState()

useEffect(()=>{

   const it=async()=>{
    const user= JSON.parse(localStorage.getItem('info'))
    setperson(user)
    settoken(user.token)
    console.log(user)
     const config={
         headers:{
           Authorization:`Bearer ${user.token || token }`
         }
     }
    await axios.get('http://localhost:7000/api/handlers/allusers',config).then(res=>{
      setdata(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
it()
  
},[])

const send= async (pid)=>{
  const user=JSON.parse(localStorage.getItem('info'))
  const config={
    headers:{
      Authorization:`Bearer ${user.token}`
    }
}
await axios.put('http://localhost:7000/api/handlers/send',{pid},config).then(res=>{
 let data1=res.data
 data1={...data1,token}
 localStorage.setItem("info",JSON.stringify(data1))
 setperson(data1)
 settoken(data1.token)
}).catch((error)=>{
 console.log(error)
})
}


const accept= async (id)=>{
  const user=JSON.parse(localStorage.getItem('info'))
  const config={
    headers:{
      Authorization:`Bearer ${user.token}`
    }
}
await axios.put('http://localhost:7000/api/handlers/acceptRequest',{id},config).then(res=>{
 let data1=res.data
 data1={...data1,token}
 localStorage.setItem("info",JSON.stringify(data1))
 setperson(data1)
 settoken(data1.token)
}).catch((error)=>{
 console.log(error)
})
}
  return (
    <div>
      <h1>pages</h1>
      <Nav/>
      <>
        {data.map((all)=>(
           <h3 key={all._id}>
              {all.user}:{person.sendRequest.includes(all._id)?"pending"
              :person.Requests.includes(all._id)?(<button onClick={()=>{accept(all._id)}}>accept</button>)
              :person.friendlist.includes(all._id)?"friends":(<button onClick={()=>{send(all._id)}}>send request</button>)}
            </h3>
        ))}
      </>
    </div>
  )
}

export default Pages