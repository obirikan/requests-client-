import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}} className='nav'>
       <Link to='/main' className='link'><p className='ic'>home</p><img className='imgg' src='imgs/home.png' alt='home'/></Link>
       <Link to='/sent' className='link'><p className='ic'>Sent Request</p><img className='imgg' src='imgs/sent-2.png' alt='home'/></Link>
       <Link to='/friends'className='link'><p className='ic'>Friendlist</p><img className='imgg' src='imgs/friends.png' alt='home'/></Link>
       <Link to='/recieve'className='link'><p className='ic'>received Request</p><img className='imgg' src='imgs/recieved-2.png' alt='home'/></Link>
    </div>
  )
}

export default Nav