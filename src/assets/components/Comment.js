import React from 'react'
import userImg from '../image/profile.png';
import './css/Comment.css';
import  { ReactComponent as LikedIcon } from '../image/like.svg'

function Comment(props) {

  return (
    <div className='comment-warper'>
      <div className='main-comment'>
      
        <img className='comment-profile-picture' src={userImg} alt='' />

        <div className='comment-body' >
          <div className='row'>
            <p className='comment-username' >{props.data.username}</p>
            <p className='comment-time' >3w</p>
          </div>
          <p className='comment-content'>{props.data.comment}</p>
          <p className='reply-button'>Reply</p>
        </div>
        
        <div className='like-container'>
          <LikedIcon className='like-comment-icon' />
          <p className='commnet-like-cont' >20</p>
        </div>
      
      </div>
      
      {props.data.replies.map((reply)=>(
        <div className='reply-container'>
          <img className='reply-profile-picture' src={userImg} alt='' />
          
          <div className='comment-reply-body' >
            <div className='row'>
              <p className='comment-username' >{reply.username}</p>
              <p className='comment-time' >3w</p>
            </div>
            <p className='comment-content'>{reply.reply}</p>
            <p className='reply-button'>Reply</p>
          </div>

          <div className='like-container' >
            <LikedIcon className='like-comment-icon' />
            <p className='commnet-like-cont' >20</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Comment;