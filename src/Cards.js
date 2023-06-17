import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle, } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function Cards({ data }) {
  return (
    <div>
      {data.map((cards) => (
        <div className='div'>
          {cards.texto && <h2>{cards.texto}</h2>}
          <FontAwesomeIcon icon={faWater} className="water-icon" />
          <FontAwesomeIcon className='descarga' icon={faDownload} />
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <FontAwesomeIcon icon={faExclamationCircle} className="exclamation-icon" />
          
        </div>
      ))}
    </div>
  );
}

export default Cards;

