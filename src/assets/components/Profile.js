import React, { useState } from 'react'
import './css/Profile.css'
import CardLayout from './CardLayout.js'
import userImg from '../image/profile.png';

function Profile() {

    const [selected , setSelected] = useState('your-thought');

    const selectContent = (select) => {
        setSelected(select);
    }

  return (
    <div className='profile-container'>
        <img className='profile-img' src={userImg} alt='' />
        <p className='user-name'>Ravi Kourav</p>
        <p className='user-id'>@ravikourav</p>
        <div className='follow-container'>
            <div>
                <p>112</p>
                <p>follower</p>
            </div>
            <div>
                <p>5</p>
                <p>following</p>
            </div>
        </div>

        <div className='post-container'>
            <div className='post-selector-container'>
                <p className= {`post-selector ${ selected === "your-thought" && 'post-selected'}`} onClick={()=>{selectContent('your-thought')}}>Your Posts</p>
                <p className= {`post-selector ${ selected === "saved" && 'post-selected'}`} onClick={()=>{selectContent('saved')}}>Saved</p>
            </div>
            <CardLayout />
        </div>

    </div>
  )
}

export default Profile;