import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
const [name,setname]=useState('')
const [password,setpass]=useState('')

const send=async()=>{
    const config={
        headers:{
            "Content-type":"application/json"
        }
    }
    await axios.post('http://localhost:7000/api/users/login',{users:name,password:password},config).then(()=>{
        setname('')
      }).catch((err)=>{
          alert(err)
      })
  }
  return (
<div>
    <h1>login</h1>
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