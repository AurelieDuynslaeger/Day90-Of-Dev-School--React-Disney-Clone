import React from 'react'
import '../routes/App.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Header = () => {
  return (
    <div className='header'>
          <Link to="/"><img src="img\logo.png" alt="" srcset=""/></Link>
    </div>
  )
}
