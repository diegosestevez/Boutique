import React from 'react';
import "./topbar.css";
import {ExitToApp} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutUser} from './../../redux/apiCalls';

const Topbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    logoutUser(dispatch, {isAdmin:false});
    window.location.reload(false);
  }

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
              <ExitToApp onClick={handleClick}/>
          </div>
          <img className="topAvatar" src="https://www.publicdomainpictures.net/pictures/90000/velka/tete-de-pigeon-1398017497xQG.jpg" alt="profile"/>
        </div>
      </div>
    </div>
  )
}

export default Topbar
