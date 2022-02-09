import React from 'react';
import './newUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='jon'/>
        </div>
        <div className='newUserItem'>
          <label>Full Name</label>
          <input type='text' placeholder='Jon Snow'/>
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='jon@gmail.com'/>
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password'/>
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='text' placeholder='+1 234 567 8901'/>
        </div>
        <div className='newUserItem'>
          <label>Address</label>
          <input type='text' placeholder='Hollywood | CA'/>
        </div>
        <div className='newUserItem'>
          <label>Gender</label>
          <div className='newUserGender'>
            <input type='radio' placeholder='gender' id='male' value='male'/>
            <label for='Male'>Male</label>
            <input type='radio' placeholder='gender' id='female' value='female'/>
            <label for='Female'>Female</label>
            <input type='radio' placeholder='gender' id='other' value='other'/>
            <label for='Other'>Other</label>
          </div>
        </div>
        <div className='newUserItem'>
          <label>Active</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div className='newUserItem'>
          <button className='newUserButton'>Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewUser;
