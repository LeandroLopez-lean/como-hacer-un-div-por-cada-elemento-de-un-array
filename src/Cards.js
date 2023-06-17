import React from 'react';
import './App.css';

function Cards({ data }) {
  return (
    <div>
      {data.map((cards, index) => (
        <div className='div'>
          {cards.texto && <h2>{cards.texto}</h2>}
        </div>
      ))}
    </div>
  );
}

export default Cards;

