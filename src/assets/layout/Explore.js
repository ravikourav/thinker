import React, { useEffect, useState } from 'react';
import ExploreCard from '../components/ExploreCard';
import CardGrid from '../components/CardGrid.js';
import { ReactComponent as BackImg } from '../image/arrow-back.svg';
import { ReactComponent as SearchIcon } from '../image/search.svg';
import './css/Explore.css';

import { useIsMobile } from '../utils/screenSize.js';

import categoryData from '../../temp/Explore.json';

function Explore() {
  
  const isMobile = useIsMobile();

  const [category, setCategory] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setCategory(categoryData);
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className='explore-page-layout'>
      {isMobile && !selectedCard &&
        <div className="explore-search-header">
          <div className='custom-search-box'>
            <SearchIcon className='search-icon'/>
            <input type="text" placeholder="Search" className="mobile-search-input " />
          </div>
        </div>
      }
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
          <div className='tag-card-layout'>
            <BackImg className='close' onClick={() => setSelectedCard(null)} />
            <ExploreCard
              name={selectedCard.name}
              background={selectedCard.background}
              slogan={selectedCard.slogan}
            />
            {selectedCard.cards && <CardGrid data={selectedCard.cards} />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore;
