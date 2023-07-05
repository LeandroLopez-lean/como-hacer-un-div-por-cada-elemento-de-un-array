import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';
import './index.css';

function App() {
  const data = [
    { title: 'Nombre de la capa1',
      category: 'name category A'
    },
    { title: 'Nombre de la capa2',
      category: 'category'
    },
    { title: 'Nombre de la capa3',
      category: 'category'
    },
    { title: 'Nombre de la capa4',
      category: 'category'
    },
    { title: 'Nombre de la capa5',
      category: 'category'
    }

  ];
 
  const descarga = () => {
     console.log("descarga");
    };
  

  return (
    <div className='App'>
      <Cards data={data}onDownload={descarga}/>
    </div>
  );
}

export default App;

