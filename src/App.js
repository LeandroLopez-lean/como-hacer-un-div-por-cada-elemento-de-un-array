import React from 'react';
import Cards from './Cards';

function App() {
  const data = [
    { texto: 'Nombre de la capa' },
    { texto: 'Nombre de la capa' },
    { texto: 'Nombre de la capa' },
    { texto: 'Nombre de la capa' },
    { texto: 'Nombre de la capa' },

  ];

  return (
    <div className='App'>
      <Cards data={data} />
    </div>
  );
}

export default App;

