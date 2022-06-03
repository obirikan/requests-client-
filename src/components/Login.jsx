import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
const [name,setname]=useState('')
const [password,setpass]=useState('')
const [error,seterror]=useState()

useEffect(()=>{
   
},[])

const send=async()=>{
    const config={
        headers:{
            "Content-type":"application/json"
        }
    }
    await axios.post('http://localhost:7000/api/users/login',{users:name,password:password},config).then((res)=>{
        console.log(res.data)
        setname('')
      }).catch((err)=>{
          seterror(err.response.data)
          setTimeout(() => {
            seterror('')
        },3000);
      })
  }
  return (
<div>
    <h1>login</h1>
    <h4 style={{color:'red'}}>{error}</h4>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
    <br /><br />
    <input type="password" value={password} onChange={(e)=>setpass(e.target.value)} />
    <br /><br />
    <button onClick={send}>send</button>
    <p>Don't have an account?<Link to='/'><b>click here</b></Link></p>        
</div>
  )
}

export default Login