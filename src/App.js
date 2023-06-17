import React from 'react';
import './App.css';
import Cards from './Cards';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  const texto = [];
  texto.push({
    texto: 'Nombre de la capa',
  });
  texto.push({
    texto: 'Nombre de la capa',
  });
  texto.push({
    texto: 'Nombre de la capa',
  });
  texto.push({
    texto: 'Nombre de la capa',
  });
  texto.push({
    texto: 'Nombre de la capa',
  });

  return (
    <div className="App">
      <Cards data={texto} />
    </div>
  );
}

export default App;
