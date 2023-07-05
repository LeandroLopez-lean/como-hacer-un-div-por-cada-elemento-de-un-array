import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';
import './index.css';

function App() {
  const cardsData = [
    { title: 'Nombre de la capa1',
      category: 'category A'
    },
    { title: 'Nombre de la capa2',
      category: 'categoryB'
    },
    { title: 'Nombre de la capa3',
      category: 'categoryC'
    },
    { title: 'Nombre de la capa4',
      category: 'categoryD'
    },
    { title: 'Nombre de la capa5',
      category: 'categoryE'
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

