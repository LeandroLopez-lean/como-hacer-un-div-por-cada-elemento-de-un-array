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
      {texto.map((item, index) => (
        <div key={index}>
          {item.texto && <h2>{item.texto}</h2>}
        </div>
      ))}
    </div>
  );
}

export default App;
