import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
       <Link to='/main'><p>main page</p></Link>
       <Link to='/sent'><p>Sent request</p></Link>
       <Link to='/friends'><p>friendlist</p></Link>
       <Link to='/recieve'><p>received request</p></Link>
      
    </div>
  )
}

export default Nav