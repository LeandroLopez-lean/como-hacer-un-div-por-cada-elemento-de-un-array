import React from 'react';
import './App.css';

function Cards() {
  const texto = [];
  texto.push({
    texto: '¿Como hacer un div por cada Array ?',
  });
  texto.push({
    texto: 'div 2',
  });
  texto.push({
    texto: 'div 3',
  });
  
  return (
    <div>
      {texto.map((cards) => (
        <div className='div'>
          {cards.texto && <h2>{cards.texto}</h2>}
        </div>
      ))}
    </div>
  );
}

export default Cards;