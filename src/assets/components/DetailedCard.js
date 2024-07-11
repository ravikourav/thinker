import React from 'react';
import './css/DetailedCard.css';
import Card from './Card.js';

import {ReactComponent as BackIcon } from '../image/arrow-back.svg';
import TempImg from '../image/profile.png';

function DetailedCard({ selectedCard, onClose }) {

  return (
    <div className="modal-wraper">
      <BackIcon className='close' onClick={onClose} />

      <div className='content-wraper'>
      <Card 
        size='large'
        content={selectedCard.content}
        textColor={selectedCard.contentColor}  // Pass the textColor prop here
        author={selectedCard.author}
        background={selectedCard.background}
      />

      <div className="modal-box">
        <div className='post-owner-container'>
          <div className='flex-row'>
            <img className='post-owner-profile-image' src={TempImg} alt=''/>
            <div className='flex-column'>
              <p className='post-owner-name'>RaviKourav</p>
              <p className='post-owner-followers'>200k followers</p>
            </div>
          </div>
          <p className='main-button'>Follow</p>
        </div>
        <div className='comment-container'>
        </div>
        <div className='add-comment-container'>
          <img className='user-profile-image' src={TempImg} alt=''></img>
          <input className='main-input comment-input' placeholder='Comment' type='text' />
          <p className='main-button'>Post</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DetailedCard;
