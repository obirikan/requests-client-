import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <Link to='/'><span>Sent request</span></Link>
       <Link to='/'><span>received request</span></Link>
    </div>
  )
}

export default Nav