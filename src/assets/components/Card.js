import React from 'react';
import './css/Card.css'

function Card(props) {

  return (
    <div className={`card ${props.size}`} >
      <img className='bg-img' src={props.background} alt=''/>
      <div className='card-bg-tint'>
        <p className='content'>{props.content}</p>
        <p className='author' >{'-'+ props.author}</p>
      </div>
    </div>
  )
}

export default Card;