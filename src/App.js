import React from 'react';
import './App.css';

function App() {
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
    <div className="App">
      {texto.map((carts) => (
        <div className='div'>
          {carts.texto && <h2>{carts.texto}</h2>}
        </div>
      ))}
    </div>
  );
}

export default App;
