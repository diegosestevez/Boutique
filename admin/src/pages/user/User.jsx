import React from 'react';
import './user.css';
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@material-ui/icons';
import {Link} from "react-router-dom";
// import Sidebar from './../../components/sidebar/Sidebar';

const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'> Edit User </h1>
        <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
            <div className='userShowTop'>
              <img className='userShowImg' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png' alt=''/>
              <div className='userShowTopTitle'>
                  <span className='userShowUsername'>John Snow</span>
                  <span className='userShowUserTitle'>Software Developer</span>
              </div>
            </div>
            <div className='userShowBottom'>
                <span className='userShowTitle'>Account Details</span>
                <div className='userShowInfo'>
                  <PermIdentity className='userShowIcon'/>
                  <span className='userShowInfoTitle'>notastark432</span>
                </div>
                <div className='userShowInfo'>
                  <CalendarToday className='userShowIcon'/>
                  <span className='userShowInfoTitle'>10.11.1983</span>
                </div>
                <span className='userShowTitle'>Contact Details</span>
                <div className='userShowInfo'>
                  <PhoneAndroid className='userShowIcon'/>
                  <span className='userShowInfoTitle'>+1 234 567 8901</span>
                </div>
                <div className='userShowInfo'>
                  <MailOutline className='userShowIcon'/>
                  <span className='userShowInfoTitle'>jon@gmail.com</span>
                </div>
                <div className='userShowInfo'>
                  <LocationSearching className='userShowIcon'/>
                  <span className='userShowInfoTitle'>Hollywood | CA</span>
                </div>
            </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
                <div className='userUpdateItem'>
                  <label>Username</label>
                  <input className='userUpdateInput' type='text' placeholder='notastark432'/>
                </div>
                <div className='userUpdateItem'>
                  <label>Fullname</label>
                  <input className='userUpdateInput' type='text' placeholder='Jonathan Snow'/>
                </div>
                <div className='userUpdateItem'>
                  <label>Email</label>
                  <input className='userUpdateInput' type='text' placeholder='jon@gmail.com'/>
                </div>
                <div className='userUpdateItem'>
                  <label>Phone</label>
                  <input className='userUpdateInput' type='text' placeholder='+1 234 567 8901'/>
                </div>
                <div className='userUpdateItem'>
                  <label>Address</label>
                  <input className='userUpdateInput' type='text' placeholder='Hollywood | CA'/>
                </div>
            </div>
            <div className='userUpdateRight'>
                <div className='userUpdateUpload'>
                  <img className='userUpdateImg' src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Jon_Snow_Season_8.png/220px-Jon_Snow_Season_8.png' alt=''/>
                  <label htmlFor='file'><Publish className='userUpdateIcon'/></label>
                  <input type='file' id='file' style={{display:'none'}}/>
                </div>
                <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
