import React,{useEffect,useState} from 'react'
import Nav from './Nav'
import axios from 'axios'

const Friends = () => {
    const [data,setdata]=useState([])
    const [user,setuser]=useState()
    const [length,setlen]=useState(0)

    useEffect(()=>{
        const it=async()=>{
        const user = JSON.parse(localStorage.getItem("info"));
        setlen(user.sendRequest.length)
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
    },[length])

    
    const withdraw=async(id)=>{
      const user=JSON.parse(localStorage.getItem('info'))
      const token=user.token
      const config={
        headers:{
          Authorization:`Bearer ${user.token}`
        }
    }
     await axios.put('http://localhost:7000/api/handlers/unfriend',{id},config).then(res=>{
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
        <h1>Friendlist</h1>
        <><Nav/></>
        {/* <>
        {data.map((a)=>(
         <h2 key={a._id}>
           {a.user}:{user.friendlist.includes(a._id)?(<button className='btn-3' onClick={()=>{withdraw(a._id)}}>unfriend</button>):"done"}
        </h2>
       ))}</> */}
        {length>0?
       <>
        {data.map((a)=>
         <h2 key={a._id}>
         {a.user}:{user.friendlist.includes(a._id)?(<button className='btn-3' onClick={()=>{withdraw(a._id)}}>unfriend</button>):<b style={{color:'tomato'}}>removed</b>}
      </h2>
       )}
        </>
      :<h5 className='undone-1'>No friends</h5>} 
    </div>
  )
}

export default Friends