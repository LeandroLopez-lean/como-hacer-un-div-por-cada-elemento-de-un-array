import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';
import './index.css';

function App() {
  const cardsData = [
    { title: 'Nombre de la capa',
      category: 'categoria'
    },
    { title: 'Nombre de la capa',
      category: 'categoria'
    },
    { title: 'Nombre de la capa',
      category: 'categoria'
    },
    { title: 'Nombre de la capa',
      category: 'categoria'
    },
    { title: 'Nombre de la capa',
      category: 'categoria'
    }

  ];
 
  const descarga = () => {
     console.log("descarga");
    };
  

  return (
    <div className='App'>
      <Cards data={cardsData}onDownload={descarga}/>
    </div>
  );
}

export default App;

