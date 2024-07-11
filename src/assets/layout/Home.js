import './css/Home.css';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import DetailedCard from '../components/DetailedCard';
import cardData from '../../temp/card.json';

function Home() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setData(cardData);
  }, []);

  const handleCardClick = (card) => {
    console.log(card);
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className='full-page-layout'>
      {!selectedCard ? (
        <div className='card-layout'>
          {data.map((card, index) => (
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
  );
}

export default Home;
