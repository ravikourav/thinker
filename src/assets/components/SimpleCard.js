import React from 'react'
import './css/Card.css'

function SimpleCard(props) {
  return (
    <div className='card small' >
      <img className='bg-img' src={props.background} alt=''/>
      <div className='explore-bg-tint'>
        <p className='explore-content'>{props.content}</p>
      </div>
    </div>
  )
}

export default SimpleCard