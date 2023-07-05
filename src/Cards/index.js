import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faTimes,
  faSlidersH,
  faWater, faBars,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { Card, Text, info } from '@mantine/core';
import './index.css';



function Cards({ data, info, onDownload }) {
  return (
      <div className='div'>
        {data.map((card, index) => (
          <Card key={index} className='card-container'>
            <div className='top-bar'>
              <Text>{card.title}</Text>
              <FontAwesomeIcon className="close-icon" icon={faTimes} />
            </div>
            <div className='content'>
              <div className="water-icon">
                <FontAwesomeIcon icon={faWater} />
              </div>
              <div className='icon-container'>
                <div className='icons'>
                  <FontAwesomeIcon
                    icon={faDownload}
                    className='dowloand-icon'
                    onClick={onDownload} />
                  <FontAwesomeIcon icon={faBars} className="menu-icon" />
                  <FontAwesomeIcon icon={faExclamationCircle} className="exclamation-icon" />
                  <FontAwesomeIcon icon={faSlidersH} className="potentiometer-icon" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
  );
}


export default Cards;

