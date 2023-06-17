import React from 'react';
import './App.css';

function Data({ data }) {
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
      {data.map((data) => (
        <div className='div'>
          {data.texto && <h2>{data.texto}</h2>}
        </div>
      ))}
    </div>
  );
}

export default Data;
