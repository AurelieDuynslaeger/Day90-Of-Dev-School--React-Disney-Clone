import React from 'react'
import '../routes/App.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <div className='header'>
          <Link to="/"><img src={logo} alt="" srcset=""/></Link>
    </div>
  )
}
