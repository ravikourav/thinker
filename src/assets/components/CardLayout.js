import React from 'react';
import Card from './Card';

function CardLayout() {
  return (
    <div style={style.pin_container}>
      <Card size='small' content='Hello Word ' author='anything' background='https://picsum.photos/200/300'/>
      <Card size='medium' content='Hello Word' author='anything' background='https://picsum.photos/200/300'/>
      <Card size='large' content='Hello Word' author='anything' background='https://picsum.photos/200/300'/>
    </div>
  )
}

const style = {
    pin_container : {
      margin: 0, 
      padding: 0,
      width: '95vw',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 250px)',
      gridAutoRows: '10px',
      justifyContent: 'center',
    }
}

export default CardLayout;