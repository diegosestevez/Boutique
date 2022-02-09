import React from 'react';
import "./sidebar.css";
import SidebarMenu from './../sidebarMenu/SidebarMenu';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from '@material-ui/icons';

const Sidebar = () => {
  return(
    <div className='sidebar'>
    <div className="sidebarWrapper">
      <SidebarMenu
          sidebarTitle='Dashboard'
          sidebarIcon1= <LineStyle/>
          sidebarIcon2= <Timeline/>
          sidebarIcon3= <TrendingUp/>
          sidebarListItem1='Home'
          sidebarListItem2='Analytics'
          sidebarListItem3='Sales'
        />

        <SidebarMenu
          sidebarTitle='Quick Menu'
          sidebarIcon1= <PermIdentity/>
          sidebarIcon2= <Storefront/>
          sidebarIcon3= <AttachMoney/>
          sidebarIcon4= <BarChart/>
          sidebarListItem1='Users'
          sidebarListItem2='Products'
          sidebarListItem3='Transactions'
          sidebarListItem4='Reports'
        />

        <SidebarMenu
          sidebarTitle='Notifications'
          sidebarIcon1= <MailOutline/>
          sidebarIcon2= <DynamicFeed/>
          sidebarIcon3= <ChatBubbleOutline/>
          sidebarListItem1='Mail'
          sidebarListItem2='Feedback'
          sidebarListItem3='Messages'
        />

        <SidebarMenu
          sidebarTitle='Staff'
          sidebarIcon1= <WorkOutline/>
          sidebarIcon2= <Timeline/>
          sidebarIcon3= <Report/>
          sidebarListItem1='Manage'
          sidebarListItem2='Analytics'
          sidebarListItem3='Reports'
        />
    </div>
    </div>
  )
}

export default Sidebar
