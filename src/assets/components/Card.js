import React from 'react';
import './css/Card.css';
import {adjustColorBrightness} from '../utils/adjustColorBrightness.js';

function Card(props) {

  const authorColor = adjustColorBrightness(props.textColor, -40);

  return (
    <div className={`card ${props.size}`} onClick={props.onClick}>
      <img className='bg-img' src={props.background} alt=''/>
      <div className='card-bg-tint'>
        <p style={{color: props.textColor}} className='content'>{props.content}</p>
        <p style={{color: authorColor }} className='author'>{'-' + props.author}</p>
      </div>
    </div>
  );
}

export default Card;
