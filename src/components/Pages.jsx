import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './style.css'
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
     const config={
         headers:{
           Authorization:`Bearer ${user.token || token }`
         }
     }
    await axios.get('https://frndrequest.herokuapp.com/api/handlers/allusers',config).then(res=>{
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
await axios.put('https://frndrequest.herokuapp.com/api/handlers/send',{pid},config).then(res=>{
 let data1=res.data
 data1={...data1,token}
 localStorage.setItem("info",JSON.stringify(data1))
 setperson(data1)
 settoken(data1.token)
}).catch((error)=>{
 console.log(error)
})
}

const reject=async(id)=>{
  const user=JSON.parse(localStorage.getItem('info'))
  const token=user.token
  const config={
    headers:{
      Authorization:`Bearer ${user.token}`
    }
}
 await axios.put('https://frndrequest.herokuapp.com/api/handlers/unrec',{id},config).then(res=>{
 let data1=res.data
 data1={...data1,token}
 localStorage.setItem("info",JSON.stringify(data1))
 setperson(data1)
//    settoken(data1.token)})
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
await axios.put('https://frndrequest.herokuapp.com/api/handlers/acceptRequest',{id},config).then(res=>{
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
           <div className='div1' key={all._id}>
              {<><img src='/user.png' alt='user'/>{' '}{' '}{all.user}</>}:{person.sendRequest.includes(all._id)?<b style={{color:'tomato'}}>pending</b>
              :person.Requests.includes(all._id)?(<><button className='btn-1' onClick={()=>{accept(all._id)}}>accept</button><button className='btn-3' onClick={()=>{reject(all._id)}}>reject</button></>)
              :person.friendlist.includes(all._id)?<button className='btn-2'>friends</button>:(<button className='btn-1' onClick={()=>{send(all._id)}}>send request</button>)}
          </div>
        ))}
      </>
    </div>
  )
}

export default Pages