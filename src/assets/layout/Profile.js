import React, { useState , useEffect} from 'react';
import './css/Profile.css';
import Card from '../components/Card.js';
import DetailedCard from '../components/DetailedCard.js';
import userImg from '../image/profile.png';

import cardData from '../../temp/card.json';
import saveData from '../../temp/save.json';

function Profile() {

    const [postedData, setPostedData] = useState([]);
    const [saveCardData, setSaveCardData] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const [selected , setSelected] = useState('your-thought');

    useEffect(() => {
        setPostedData(cardData);
        setSaveCardData(saveData);
    }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };
    
    const handleCloseModal = () => {
        setSelectedCard(null);
    };

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
            {!selectedCard ? (
                <div className='card-layout'>
                    {displayData.map((card, index) => (
                        <Card
                        key={index}
                        size='small'
                        content={card.content}
                        textColor={card.contentColor}  // Pass the textColor prop here
                        author={card.author}
                        background={card.background}
                        onClick={() => handleCardClick(card)}
                        />
                    ))}
                </div>
            ) : (
                <DetailedCard 
                selectedCard={selectedCard}
                onClose={handleCloseModal}
                />
            )}
        </div>
    </div>
  )
}

export default Profile;