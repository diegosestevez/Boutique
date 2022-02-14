import React from 'react';
import './newUser.css';

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className='newUserTitle'>New User</h1>
      <form className='newUserForm'>
        <div className='newUserItem'>
          <label>Username</label>
          <input type='text' placeholder='username'/>
        </div>
        <div className='newUserItem'>
          <label>Email</label>
          <input type='email' placeholder='yourEmail@email.com'/>
        </div>
        <div className='newUserItem'>
          <label>Password</label>
          <input type='password' placeholder='password'/>
        </div>
        <div className='newUserItem'>
          <label>Phone</label>
          <input type='number' placeholder='1234567890'/>
        </div>
        <div className='newUserItem'>
          <label>Administrator</label>
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
