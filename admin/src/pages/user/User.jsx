import React from 'react';
import './user.css';
import {PermIdentity, PhoneAndroid, MailOutline, Lock} from '@material-ui/icons';
import {Link, useLocation} from "react-router-dom";
import {useSelector} from 'react-redux';


const User = () => {
  const location = useLocation();
  const userId = location.pathname.split('/')[2];
  const user = useSelector(state => state.users.users.find(user => user._id === userId));

  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'> Edit User </h1>
        <Link to='/newUser'>
          <button className='userAddButton'>New</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
            <div className='userShowBottom'>
                <span className='userShowTitle'>User Details</span>
                <div className='userShowInfo'>
                  <PermIdentity className='userShowIcon'/>
                  <span className='userShowInfoTitle'>{user.username}</span>
                </div>
                <div className='userShowInfo'>
                  <MailOutline className='userShowIcon'/>
                  <span className='userShowInfoTitle'>{user.email}</span>
                </div>
                <div className='userShowInfo'>
                  <PhoneAndroid className='userShowIcon'/>
                  <span className='userShowInfoTitle'>{user.phone}</span>
                </div>
                <div className='userShowInfo'>
                  <Lock className='userShowIcon'/>
                  <span className='userShowInfoTitle'>{user.isAdmin?'Yes':'No'}</span>
                </div>
            </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
                <div className='userUpdateItem'>
                  <label>Username</label>
                  <input className='userUpdateInput' type='text' placeholder={user.username}/>
                </div>
                <div className='userUpdateItem'>
                  <label>Email</label>
                  <input className='userUpdateInput' type='text' placeholder={user.email}/>
                </div>
                <div className='userUpdateItem'>
                  <label>Phone</label>
                  <input className='userUpdateInput' type='text' placeholder={user.phone}/>
                </div>
                <div className='userUpdateItem'>
                  <label>Administrator</label>
                  <select className='isAdmin' id='isAdmin'>
                    <option value='' disabled selected>{user.isAdmin?'Yes':'No'}</option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                  </select>
                </div>
            </div>
            <div className='userUpdateRight'>
                <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
