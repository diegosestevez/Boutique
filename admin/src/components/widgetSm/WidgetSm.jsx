import React, {useState, useEffect} from 'react';
import './widgetSm.css';
import {Visibility} from '@material-ui/icons';
import {userRequest} from './../../requestMethods';

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const getUsers = async () =>{
      try{
        const res = await userRequest.get("/users?new=true");
        setUsers(res.data.users)
      }catch(err){
        console.log(err)
      }
    }
    getUsers();
  }, [])

  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
          {users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
            <img className="widgetSmImg" src={user.img || "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"} alt=""/>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
          </li>
          ))}
      </ul>
    </div>)
}

export default WidgetSm
