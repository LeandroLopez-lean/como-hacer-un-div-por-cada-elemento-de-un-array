import React from 'react';
import Cards from './Cards/index.js';
import './Cards/index.js';
import './index.css';
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
  ];  

  return (
    <div className='App'>
      <Cards data={cardsData}/>
    </div>
  );
}

export default App;

