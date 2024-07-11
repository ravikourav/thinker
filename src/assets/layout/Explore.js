import React, { useEffect, useState } from 'react';
import ExploreCard from '../components/ExploreCard';

import categoryData from '../../temp/Explore.json';

function Explore() {
  const [category, setCategory] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setCategory(categoryData);
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className='full-page-layout'>
      <div className='card-layout'>
        {!selectedCard ? (
          category.map((card, index) => (
            <ExploreCard
              key={index}
              name={card.name}
              background={card.background}
              slogan={card.slogan}
              onClick={() => handleCardClick(card)}
            />
          ))
        ) : (
          <div className='teg-card-layout'>
            <h2>Category Selected</h2>
            <p>Name: {selectedCard.name}</p>
            <p>Slogan: {selectedCard.slogan}</p>
            <img src={selectedCard.background} alt={selectedCard.name} />
            <button onClick={() => setSelectedCard(null)}>Back to Categories</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
