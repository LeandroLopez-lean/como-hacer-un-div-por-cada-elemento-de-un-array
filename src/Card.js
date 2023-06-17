import React from 'react';
import './App.css';

function Card({ data }) {
  return (
    <div>
      {data.map((cards) => (
        <div className='div'>
          {cards.texto && <h2>{cards.texto}</h2>}
        </div>
      ))}
    </div>
  );
}

export default Card;