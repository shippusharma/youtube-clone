import React, { useState } from 'react';
import './CSS/Header.css';
import YtLogo from './youtube-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
// import { Link } from 'react-router-dom';

export default function Header() {
  const [searchInput, setSearchInput] = useState('');

  const clickSearchButton = (e) => {
    e.preventDefault();
    setSearchInput('');
  };

  return (
    <>
      <div className='header'>
        <div className='header__left'>
          <MenuIcon />
          <img className='header__logo' src={YtLogo} alt='youtube-logo' />
        </div>

        <div className='header__input'>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder=' Search'
            type='text'
          />
          {/* <Link to={`/search/:${searchInput}`}> */}
          <SearchIcon onClick={clickSearchButton} className='header__inputSearchButton' />
          {/* </Link> */}
        </div>

        <div className='header__icons'>
          <VideoCallIcon className='header__icon' />
          <AppsIcon className='header__icon' />
          <NotificationsIcon className='header__icon' />
          <Avatar src='https://source.unsplash.com/random' alt='logo' />
        </div>
      </div>
    </>
  );
}
