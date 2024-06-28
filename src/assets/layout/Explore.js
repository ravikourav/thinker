import React from 'react'
import SimpleCard from '../components/SimpleCard';

function Explore() {
  return (
    <div className='card-layout'>
        <SimpleCard content='Anime' background='https://picsum.photos/200/300'/>
        <SimpleCard content='Anime' background='https://picsum.photos/200/300'/>
        <SimpleCard content='Anime' background='https://picsum.photos/200/300'/>
        <SimpleCard content='Anime' background='https://picsum.photos/200/300'/>
    </div>
  )
}

export default Explore;