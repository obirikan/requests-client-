import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Register = () => {
 const [name,setname]=useState('')
 const [password,setpass]=useState('')
 const [error,seterror]=useState()
 const history = useHistory();

 const send=async()=>{
   const config={
       headers:{
           "Content-type":"application/json"
       }
   }
   await axios.post('https://frndrequest.herokuapp.com/api/users/register',{users:name,password:password},config).then((res)=>{

     setname('')
     localStorage.setItem("info",JSON.stringify(res.data))
     history.push("/main");
   }).catch((error)=>{
       seterror(error.response.data)
       setTimeout(() => {
        seterror('')
      },3000);
   })
 }
  return (
    <div className="p">
      <center>
      <h1>Register</h1>
        {error?(<h4 >{error}</h4>):''}
        <input type="text" value={name} placeholder='username' onChange={(e)=>setname(e.target.value)} />
        <br /><br />
        <input type="password" placeholder='password' value={password} onChange={(e)=>setpass(e.target.value)} />
        <br /><br />
        <button onClick={send}  className='btn-5'>send</button>
        <p className='link2'>already have an account?<Link to='/login'><b>click here</b></Link></p>
      </center>
    </div>
  )
}

export default Register