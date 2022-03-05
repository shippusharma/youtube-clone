import React from 'react';
import './CSS/Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Subscriptions from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIconIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={WhatshotIcon} title='Tranding' />
      <SidebarRow Icon={Subscriptions} title='Subscription' />
      <SidebarRow Icon={VideoLibraryIcon} title='Library' />
      <hr />
      <SidebarRow Icon={HistoryIconIcon} title='History' />
      <SidebarRow Icon={OndemandVideoIcon} title='Your Videos' />
      <SidebarRow Icon={WatchLaterIcon} title='Watch Later' />
      <SidebarRow Icon={ThumbUpAltIcon} title='Liked Videos' />
      <SidebarRow Icon={ExpandMoreIcon} title='Show more' />
      <hr />
      <SidebarRow Icon={SettingsIcon} title='Setting' />
      <SidebarRow Icon={FlagIcon} title='Report History' />
      <SidebarRow Icon={HelpOutlineIcon} title='Help' />
      <SidebarRow Icon={FeedbackOutlinedIcon} title='Send Feedback' />
      <hr />
    </div>
  );
}
