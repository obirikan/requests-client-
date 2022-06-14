import React,{useState,useEffect} from 'react'
import Nav from './Nav'
import axios from 'axios'

const Res = () => {
  const [data,setdata]=useState([])
  const [user,setuser]=useState()
  const [length,setlen]=useState(0)

  useEffect(()=>{
      const it=async()=>{
      const user = JSON.parse(localStorage.getItem("info"));
      setuser(user)
      setlen(user.sendRequest.length)
      const config = {
        headers:{
          Authorization: `Bearer ${user.token}`,
             },
      };
         await axios.get('http://localhost:7000/api/handlers/requests',config).then((res)=>{
        setdata(res.data)
      }).catch((err)=>{
          alert('network error')
      })
    }
    it()
  },[length])

  const withdraw=async(id)=>{
    const user=JSON.parse(localStorage.getItem('info'))
    const token=user.token
    const config={
      headers:{
        Authorization:`Bearer ${user.token}`
      }
  }
   await axios.put('http://localhost:7000/api/handlers/unrec',{id},config).then(res=>{
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
      <h1>received request</h1>
      <><Nav/></>
       {/* <>
       {data.map((a)=>
         <h2 key={a._id}>
           {a.user}:{user.Requests.includes(a._id)?(<button className='btn-1' onClick={()=>{withdraw(a._id)}}>reject</button>):"done"}
        </h2>
       )}
      </> */}
      {length>0?
       <>
        {data.map((a)=>
        <h2 key={a._id}>
          {a.user}:{user.Requests.includes(a._id)?(<button className='btn-1' onClick={()=>{withdraw(a._id)}}>reject</button>):"done"}
       </h2>
       )}
        </>
      :<h5 className='undone-1'>No Recieved Request</h5>} 
  </div>
  )
}

export default Res