import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SidebarOption from './SidebarOption';
import {Button} from '@material-ui/core';
import Umesh from './umesh.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar_twitter'/>

            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={ SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text=" Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text=" Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text=" More"/>

            <Button variant='outlined' className="sidebar_button" fullWidth>Tweet</Button>
            <br/><br/>
            
            <div className='sidebarrr'>
           <div> <img className='img' src={Umesh}/> </div>
          <div className="text-content">
            <h4> Umesh Shakya </h4>
            <p> @umeshshakya</p>
          </div>
          </div>
       
        </div>

        

    )
}

export default Sidebar
