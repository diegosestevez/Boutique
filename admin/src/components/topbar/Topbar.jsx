import React from 'react';
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const Topbar = () => {
  return(
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className="topLeft">
        <Link to='/'>
            <span className="logo">AdminPanel</span>
        </Link>
        </div>
        <div className="topRight">
          <div className='topbarIconContainer'>
              <NotificationsNone/>
              <span className='topIconBadge'>2</span>
          </div>
          <div className='topbarIconContainer'>
              <Language/>
          </div>
          <div className='topbarIconContainer'>
              <Settings/>
          </div>
          <img className="topAvatar" src="https://www.publicdomainpictures.net/pictures/90000/velka/tete-de-pigeon-1398017497xQG.jpg" alt="profile"/>
        </div>
      </div>
    </div>
  )
}

export default Topbar
