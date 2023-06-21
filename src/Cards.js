import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle, } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { Card, Text, info} from '@mantine/core';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function Cards({ data, info }) {
  return (
    <div className=''>
      {data.map((card, index) => (
        <Card key={index} className='card-container'>
          <div>
            <Text>{card.texto}</Text>
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
             {/* Agregar el texto de la categoría */}
          </div>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faWater} className="water-icon" />
              <Text className='categori'>{info[index].item}</Text>
              <FontAwesomeIcon icon={faDownload} className='dowloand'/>
              <FontAwesomeIcon icon={faBars} className="menu-icon" />
              <FontAwesomeIcon icon={faExclamationCircle} className="exclamation-icon" />
              <FontAwesomeIcon icon={faSlidersH} className="potentiometer-icon" /> 
            </div>
        </Card>
      ))}
    </div>
  );
}


export default Cards;

 