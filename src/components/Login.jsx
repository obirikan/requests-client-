import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
const [name,setname]=useState('')
const [password,setpass]=useState('')
const [error,seterror]=useState()
const history=useHistory()


const send=async()=>{
    const config={
        headers:{
            "Content-type":"application/json"
        }
    }
    await axios.post('https://frndrequest.herokuapp.com/api/users/login',{users:name,password:password},config).then((res)=>{
        setname('')
        localStorage.setItem("info",JSON.stringify(res.data))
        history.push('/main')
      }).catch((err)=>{
          seterror(err.response.data)
          setTimeout(() => {
            seterror('')
        },3000);
      })
  }
  return (
<div className="p">
  <center>
   <h1>Login</h1>
    {error?(<h4 className="err">{error}</h4>):" "}
    <input type="text" placeholder='username' value={name} onChange={(e)=>setname(e.target.value)} />
    <br /><br />
    <input type="password" placeholder='password' value={password} onChange={(e)=>setpass(e.target.value)} />
    <br /><br />
    <button onClick={send} className='btn-5'>send</button>
    <p className='link2'>Don't have an account?<Link to='/'><b>click here</b></Link></p>  
  </center>
</div>
  )
}

export default Login