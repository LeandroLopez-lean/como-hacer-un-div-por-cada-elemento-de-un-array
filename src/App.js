import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';
import './index.css';
<<<<<<< HEAD
import {
  faDownload,
  faTimes,/* x */
  faGear,/* config */
  faWater, 
  faDownload,/* menu */
  faExclamationCircle,
  faSitemap,/* pc */
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const cardsData = [
    [faTimes, faGear],
    [faDownload, faSitemap],
    [faExclamationCircle],
=======

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

>>>>>>> parent of 31f74a1 (armado de array para los iconos)
  ];  

  return (
    <div className='App'>
      <Cards data={cardsData}/>
    </div>
  );
}

export default App;

