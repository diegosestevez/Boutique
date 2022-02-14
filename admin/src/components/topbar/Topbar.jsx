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
        <Link to='/' className="logo">
            <span>AdminPanel</span>
        </Link>
        </div>
        <div className="topRight">
          <div className='topbarIconContainer' onClick={handleClick}>
              <ExitToApp/>
              <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
