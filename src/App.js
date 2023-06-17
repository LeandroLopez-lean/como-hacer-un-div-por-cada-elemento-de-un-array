import React from 'react';
import './App.css';
import Cards from './Cards';

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
      <Cards data={texto} />
    </div>
  );
}

export default App;
