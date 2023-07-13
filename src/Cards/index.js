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

<<<<<<< HEAD
function Cards({ data, icons }) {

=======
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
>>>>>>> parent of 31f74a1 (armado de array para los iconos)
  return (
    <div className='div'>
      {data.map((card, index) => (
        <Card key={index} className='card-container'>
          <div className='top-bar'>
            <FontAwesomeIcon icon={faSitemap} className='sitemap' />
            <Text className='title'>{card.title}</Text>
            <FontAwesomeIcon className="close-icon" icon={faTimes} />
          </div>
          <div className='content'>
            <div className="water-icon">
              <FontAwesomeIcon
                icon={faWater}
              />
              <Text className='category'>{card.category}</Text>
            </div>
<<<<<<< HEAD
            <div className='icon-container'>
              {icons[index] && icons[index].map((icon, iconIndex) => (
                <FontAwesomeIcon key={iconIndex} icon={icon} className='icon' />
              ))}
=======
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
>>>>>>> parent of 31f74a1 (armado de array para los iconos)
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}


export default Cards;

