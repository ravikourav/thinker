import './css/Home.css';
import React, { useEffect, useState } from 'react';
import CardGrid from '../components/CardGrid';
import cardData from '../../temp/card.json';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cardData);
  }, []);

  return (
    <div className='home-page-layout'>
      <CardGrid data={data} />
    </div>
  );
}

export default Home;
