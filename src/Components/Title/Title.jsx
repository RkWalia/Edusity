import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div className='title'>
      <p>{props.para}</p>
      <h2>{props.heading}</h2>
    </div>
  )
}

export default Title
