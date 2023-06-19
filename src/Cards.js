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
    <div  className='App'>
      {data.map((card, index) => (
        <Card key={index}>
          <Text>{card.texto}</Text>
          <FontAwesomeIcon icon={faWater} className="water-icon" />
          <FontAwesomeIcon icon={faDownload} />
          <FontAwesomeIcon icon={faBars} className="menu-icon" />
          <FontAwesomeIcon icon={faExclamationCircle} className="exclamation-icon" />
        </Card>
      ))}
    </div>
  );
}


export default Cards;

 