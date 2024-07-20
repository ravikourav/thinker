import React, { useState } from 'react';
import './css/DetailedCard.css';
import Card from './Card.js';

import { ReactComponent as BackIcon } from '../image/arrow-back.svg';
import { ReactComponent as SendIcon } from '../image/send.svg';
import { ReactComponent as DropDownIcon } from '../image/dropdown.svg';
import { ReactComponent as LikeIcon } from '../image/like.svg';
import { ReactComponent as ShareIcon } from '../image/share.svg';
import { ReactComponent as CopyIcon } from '../image/copy.svg';
import { ReactComponent as PlayIcon } from '../image/play.svg';

import TempImg from '../image/profile.png';
import Comment from './Comment.js';

function DetailedCard({ selectedCard, onClose }) {

  const [hideComment , setHideComment] = useState(false);

  const handleTextToSpeech = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US');
      speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text to speech.');
    }
  };

  function speak(){
    handleTextToSpeech(selectedCard.author + ' said. ' + selectedCard.content);
  }

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
            <div className='flex-row commnet-title-container' onClick={()=>{setHideComment(!hideComment)}}>
              <p className='comment-header'>Comments</p>
              <DropDownIcon className='icon'>V</DropDownIcon>
            </div>
            <div style={{marginBottom: '10px'}}>
              {hideComment && selectedCard.comments.map((comment)=>(
                <Comment data={comment}/>
              ))}
            </div>
          </div>
          <div className='add-comment-container'>
            <img className='user-profile-image' src={TempImg} alt=''></img>
            <input className='main-input comment-input' placeholder='Comment' type='text' />
            <SendIcon className='send-comment' />
          </div>
        </div>
      </div>
      <div className='post-controle'>
        <CopyIcon className='post-icon'></CopyIcon>
        <PlayIcon className='post-icon' onClick={speak}></PlayIcon>
        <LikeIcon fill='white' stroke='black' className='post-icon'></LikeIcon>
        <ShareIcon className='post-icon'></ShareIcon>
      </div>
    </div>
  );
}

export default DetailedCard;
