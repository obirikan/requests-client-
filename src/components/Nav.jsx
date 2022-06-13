import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}} className='nav'>
       <Link to='/main' className='link'><p>home</p></Link>
       <Link to='/sent' className='link'><p>Sent Request</p></Link>
       <Link to='/friends'className='link'><p>Friendlist</p></Link>
       <Link to='/recieve'className='link'><p>received Request</p></Link>
    </div>
  )
}

export default Nav