import React, {useState, useEffect} from 'react';
import './widgetSm.css';
import {Visibility} from '@material-ui/icons';
import {userRequest} from './../../requestMethods';
import {Link} from 'react-router-dom';

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
      <span className="widgetSmTitle">Newsletter Subscribers</span>
      <ul className="widgetSmList">
          {users.map((user) => !user.isAdmin &&(
            <li className="widgetSmListItem" key={user._id}>
            <img className="widgetSmImg" src={user.img || "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max"} alt=""/>
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <Link to={`user/${user._id}`} className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
            </Link>
          </li>
        )
      )}
      </ul>
    </div>)
}

export default WidgetSm
