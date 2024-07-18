import React, { useEffect } from 'react';
import './css/DetailedCard.css';
import Card from './Card.js';

import { ReactComponent as BackIcon } from '../image/arrow-back.svg';
import { ReactComponent as SendIcon } from '../image/send.svg';
import TempImg from '../image/profile.png';

function DetailedCard({ selectedCard, onClose }) {

  const handleTextToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
      speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text to speech.');
    }
  };

  useEffect(() => {
    if (selectedCard && selectedCard.content) {
      handleTextToSpeech(selectedCard.author + ' said. ' + selectedCard.content);
    }
  },[selectedCard]);

  return (
    <div className="modal-wraper">
      <BackIcon className='close' onClick={onClose} />
      
      <div className='content-wraper'>
        <Card 
          size='large'
          margin={false}
          content={selectedCard.content}
          textColor={selectedCard.contentColor}
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
            <SendIcon className='send-comment' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedCard;
