import React from 'react';
import './sidebarMenu.css';
import {Link} from 'react-router-dom';

const SidebarMenu = ({
  sidebarTitle,
  sidebarIcon1,
  sidebarIcon2,
  sidebarIcon3,
  sidebarIcon4,
  sidebarListItem1,
  sidebarListItem2,
  sidebarListItem3,
  sidebarListItem4
}) => {
  return(
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">{sidebarTitle}</h3>
          <ul className="sidebarList">
              <Link className='sidebarLink' to={sidebarListItem1.toLowerCase()}>
                <li className="sidebarListItem">
                  {sidebarIcon1}
                  {sidebarListItem1}
                </li>
              </Link>
              <Link className='sidebarLink' to={sidebarListItem2.toLowerCase()}>
              <li className="sidebarListItem">
                {sidebarIcon2}
                {sidebarListItem2}
              </li>
              </Link>
              <Link className='sidebarLink' to={sidebarListItem3.toLowerCase()}>
              <li className="sidebarListItem">
                {sidebarIcon3}
                {sidebarListItem3}
              </li>
              </Link>
              {(sidebarIcon4||sidebarListItem4) &&
                <Link className='sidebarLink' to={`./../${sidebarListItem4.toLowerCase()}`}>
                <li className="sidebarListItem">
                  {sidebarIcon4}
                  {sidebarListItem4}
                </li>
                </Link>
              }
          </ul>
        </div>
  )
}

export default SidebarMenu
