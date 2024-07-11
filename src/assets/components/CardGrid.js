import React, { useState } from 'react';
import './css/CardGrid.css';
import Card from './Card';
import DetailedCard from './DetailedCard';

const CardGrid = ({ data }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      {!selectedCard ? (
        <div className='card-layout'>
          {data.map((card, index) => (
            <Card
              key={index}
              size='small'
              content={card.content}
              textColor={card.contentColor}
              author={card.author}
              background={card.background}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      ) : (
        <DetailedCard selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CardGrid;