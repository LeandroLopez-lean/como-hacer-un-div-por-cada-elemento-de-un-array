import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle, } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { Card, Text } from '@mantine/core';
import './App.css';

function Cards({ data }) {
  return (
    <div className=''>
      {data.map((card) => (
        <Card className='div'>
          <Text>{card.texto} {card.info}</Text>
          <div className='icono'>
          <FontAwesomeIcon icon={faWater} className="water-icon" />
          <FontAwesomeIcon icon={faDownload} className='dowloand'/>
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <FontAwesomeIcon icon={faExclamationCircle} className="exclamation-icon" />
          </div>
        </Card>
      ))}
    </div>
  );
}


export default Cards;

 