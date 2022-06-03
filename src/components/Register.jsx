import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
 const [name,setname]=useState('')
 const [password,setpass]=useState('')

 const send=async()=>{
   const config={
       headers:{
           "Content-type":"application/json"
       }
   }
   await axios.post('http://localhost:7000/api/users/register',{users:name,password:password},config).then(()=>{
     setname('')
   }).catch((err)=>{
       alert(err)
   })
 }
  return (
    <div>
        <h1>register</h1>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        <br /><br />
        <input type="password" value={password} onChange={(e)=>setpass(e.target.value)} />
        <br /><br />
        <button onClick={send}>send</button>
        <p>already have an account?<Link to='/login'><b>click here</b></Link></p>
    </div>
  )
}

export default Register