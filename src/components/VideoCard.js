import React from 'react';
import './CSS/VideoCard.css';
import Avatar from '@mui/material/Avatar';

export default function VideoCard({ image, channel, channeImage, title, view, timestamp }) {
  return (
    <div className='videoCard'>
      <img className='videoCard__thumbnail' src={image} alt='thumbnail' />
      <div className='videoCard__info'>
        <Avatar className='videoCard__avatar' alt={channel} src={channeImage} />
        <div className='videoCard_text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {view} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
