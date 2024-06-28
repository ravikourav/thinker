import React from 'react';
import Card from '../components/Card.js';

function Home() {
  return (
    <div className='card-layout'>
      <Card size='small' content='hello' author='ravi' background='https://picsum.photos/200/300' />
      <Card size='small' content='hello' author='ravi' background='https://picsum.photos/200/300' />
      <Card size='medium' content='hello' author='ravi' background='https://picsum.photos/id/237/200/300' />
      <Card size='small' content='hello' author='ravi' background='https://picsum.photos/id/237/200/300' />
      <Card size='large' content='hello' author='ravi' background='https://picsum.photos/id/237/200/300' />
      <Card size='large' content='hello' author='ravi' background='https://picsum.photos/id/237/200/300' />
      <Card size='small' content='hello' author='ravi' background='https://picsum.photos/id/237/200/300' />
    </div>
  )
}

export default Home;