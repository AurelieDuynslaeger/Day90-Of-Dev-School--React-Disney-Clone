import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.js'

export const NewMovie = ({id, img}) => {
  return (
    <Link to={`/movie/${id}`}><li><img src={img} alt="" srcset="" /></li></Link>
  )
}

export default NewMovie