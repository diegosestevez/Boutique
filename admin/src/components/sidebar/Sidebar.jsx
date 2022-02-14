import React from 'react';
import "./sidebar.css";
import SidebarMenu from './../sidebarMenu/SidebarMenu';
import {
  LineStyle,
  PermIdentity,
  Storefront,
} from '@material-ui/icons';

const Sidebar = () => {
  return(
    <div className='sidebar'>
    <div className="sidebarWrapper">
      <SidebarMenu
          sidebarTitle='Dashboard'
          sidebarIcon1= <LineStyle/>
          sidebarIcon2= <PermIdentity/>
          sidebarIcon3= <Storefront/>
          sidebarListItem1='Home'
          sidebarListItem2='Users'
          sidebarListItem3='Products'
        />
    </div>
    </div>
  )
}

export default Sidebar
