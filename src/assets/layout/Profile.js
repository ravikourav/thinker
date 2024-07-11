import React, { useState , useEffect} from 'react';
import './css/Profile.css';
import userImg from '../image/profile.png';

import cardData from '../../temp/card.json';
import saveData from '../../temp/save.json';
import CardGrid from '../components/CardGrid.js';

function Profile() {

    const [postedData, setPostedData] = useState([]);
    const [saveCardData, setSaveCardData] = useState([]);

    const [selected , setSelected] = useState('your-thought');

    useEffect(() => {
        setPostedData(cardData);
        setSaveCardData(saveData);
    }, []);

    const selectContent = (select) => {
        setSelected(select);
    }

    const displayData = selected === 'your-thought' ? postedData : saveCardData;

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
            <CardGrid data={displayData}/>
        </div>
    </div>
  )
}

export default Profile;