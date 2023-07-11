import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';
import './index.css';

function App() {
  const cardsData = [
    { title: 'Nombre de la capa',
      category: 'categoria'
    },
    { title: 'capacidad',
      category: 'categoria superficie'
    },
    { title: 'capa lineal',
      category: 'bajada'
    },
    { title: 'capa',
      category: 'base'
    },
    { title: 'Nombre',
      category: 'category'
    }

  ];  

  return (
    <div className='App'>
      <Cards data={cardsData}/>
    </div>
  );
}

export default App;

