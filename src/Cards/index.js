import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faTimes,
  faGear,
  faWater,
  faBars,
  faExclamationCircle,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Text } from '@mantine/core';
import './index.css';

function Cards({ data, icons }) {

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
            <div className='icon-container'>
              {icons[index] && icons[index].map((icon, iconIndex) => (
                <FontAwesomeIcon key={iconIndex} icon={icon} className='icon' />
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}


export default Cards;

