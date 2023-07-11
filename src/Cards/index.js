import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faTimes,
  faGear,
  faWater, faBars,
  faExclamationCircle,
 faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Text } from '@mantine/core';
import './index.css';

function Cards({ data }) {

  const waterClick = () => {
    console.log("water")
  }

  const onDownload = () => {
    console.log("descarga");
   };
   
  const MenuClick = () => {
    console.log('Menu');
  };

  const ExclamationClick = () => {
    console.log('Exclamation');
  };

  const configClick = () => {
    console.log('configuracion');
  };
  return (
      <div className='div'>
        {data.map((card, index) => (
          <Card key={index} className='card-container'>
            <div className='top-bar'>
            <FontAwesomeIcon icon={faSitemap} className='sitemap'/>
              <Text className='title'>{card.title}</Text>
              <FontAwesomeIcon className="close-icon" icon={faTimes} />
            </div>
            <div className='content'>
              <div className="water-icon">
                <FontAwesomeIcon icon={faWater} 
                onClick={waterClick}
                />
                <Text className='category'>{card.category}</Text>
              </div>
              <div className='icon-container'>
                <div className='icons'>
                  <FontAwesomeIcon
                    icon={faDownload}
                    className='dowloand'
                    onClick={onDownload} 
                  />
                  <FontAwesomeIcon icon={faBars} 
                  className="menu" 
                  onClick={MenuClick}
                  />
                  <FontAwesomeIcon 
                    icon={faExclamationCircle}
                    className='exclamation' 
                    onClick={ExclamationClick} 
                  />
                  <FontAwesomeIcon 
                    icon={faGear} 
                    className="config" 
                    onClick={configClick}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
  );
}


export default Cards;

