import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faDownload, 
    faTimes, 
    faSlidersH, 
    faWater, faBars, 
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { Card, Text, info} from '@mantine/core';
import './index.css';



function Cards({ data, info, onDownload }) {
  return (
    <div className='div'>
      {data.map((card, index) => (
        <Card key={index} className='card-container'>
          <div className='titulo'>
            <Text>{card.texto}</Text>
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
             {/* Agregar el texto de la categoría */}
          </div>
            <div className='icon-container'>
              <FontAwesomeIcon icon={faWater} className="water-icon" />
              <Text className='categori'>{info[index].item}</Text>
              <FontAwesomeIcon 
                icon={faDownload} 
                className='dowloand' 
                onClick={onDownload} />
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

 