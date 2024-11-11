import React, { useState } from 'react';
import { FaChevronDown, FaPlusCircle } from 'react-icons/fa';
// import { RxHamburgerMenu } from "react-icons/rx";
// import Logo from './Logo';
import './Sidebar.css';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import "@fontsource/dm-sans";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';
import Navbar from '../NavBar/NavBar';
import Striver from '../Headerdata.jsx/Striver';
import FAQ from '../FAQ';
import HighlightNote from '../Headerdata.jsx/HighlightNote';

const Sidebar = () => {
  const [isDSAOpen, setIsDSAOpen] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [isCoreSheetsOpen, setIsCoreSheetsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const toggleDSA = () => setIsDSAOpen(!isDSAOpen);
  const togglePlaylist = () => setIsPlaylistOpen(!isPlaylistOpen);
  const toggleCoreSheets = () => setIsCoreSheetsOpen(!isCoreSheetsOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
 
   const handleHamburger=()=>{
        const left=document.getElementsByClassName('left')[0];
        console.log(left);
        left.classList.toggle("open");
   }

  return (
    <>
    <div className='mainBody'>  
    <div className='sidebar' >
    <div className={`left ${collapsed ? 'collapsed' : ''}`}> 
    <button className='back-btn' onClick={handleHamburger}>
          <KeyboardReturnOutlinedIcon/>
        </button>
      <div className="logo">
      <span>TUF</span>
    </div>
      <div className="sidebar-menu">
        <li><AccountCircleOutlinedIcon /> {!collapsed && 'Profile'}</li>
        <li><CollectionsBookmarkIcon /> {!collapsed && 'Blogs'}</li>

        <div className="border-line"></div>
        <div className="scrollable-container">

          {/* DSA Sheets Section */}
          <li className="collapsible" onClick={toggleDSA}>
            <ContentPasteIcon /> {!collapsed && 'DSA Sheets'}
            {!collapsed && <FaChevronDown className={`chevron ${isDSAOpen ? 'open' : ''}`} />}
          </li>
          {isDSAOpen && !collapsed && (
            <ul className="nested-list">
              <li 
                className={activeItem === 'A2Z' ? 'active' : ''}
                onClick={() => handleItemClick('A2Z')}
              >
                Striver's A2Z Sheet
              </li>
              <li 
                className={activeItem === 'SDE' ? 'active' : ''}
                onClick={() => handleItemClick('SDE')}
              >
                Striver's SDE Sheet
              </li>
              <li 
                className={activeItem === '79' ? 'active' : ''}
                onClick={() => handleItemClick('79')}
              >
                Striver's 79 Sheet
              </li>
              <li 
                className={activeItem === 'Blind75' ? 'active' : ''}
                onClick={() => handleItemClick('Blind75')}
              >
                Blind 75 Sheet
              </li>
            </ul>
          )}

          <li><SettingsOutlinedIcon /> {!collapsed && 'System Design'}</li>

          {/* DSA Playlist Section */}
          <li className="collapsible" onClick={togglePlaylist}>
            <SmartDisplayOutlinedIcon /> {!collapsed && "Striver's DSA Playlist"}
            {!collapsed && <FaChevronDown className={`chevron ${isPlaylistOpen ? 'open' : ''}`} />}
          </li>
          {isPlaylistOpen && !collapsed && (
            <ul className="nested-list">
              <li 
                className={activeItem === 'Array' ? 'active' : ''}
                onClick={() => handleItemClick('Array')}
              >
                Array Series
              </li>
              <li 
                className={activeItem === 'DP' ? 'active' : ''}
                onClick={() => handleItemClick('DP')}
              >
                DP Series
              </li>
              <li 
                className={activeItem === 'Graph' ? 'active' : ''}
                onClick={() => handleItemClick('Graph')}
              >
                Graph Series
              </li>
              <li 
                className={activeItem === 'LinkedList' ? 'active' : ''}
                onClick={() => handleItemClick('LinkedList')}
              >
                LinkedList Series
              </li>
            </ul>
          )}

          {/* SDE Core Sheets Section */}
          <li className="collapsible" onClick={toggleCoreSheets}>
            <SchoolOutlinedIcon /> {!collapsed && 'SDE Core Sheets'}
            {!collapsed && <FaChevronDown className={`chevron ${isCoreSheetsOpen ? 'open' : ''}`} />}
          </li>
          {isCoreSheetsOpen && !collapsed && (
            <ul className="nested-list">
              <li 
                className={activeItem === 'DBMS' ? 'active' : ''}
                onClick={() => handleItemClick('DBMS')}
              >
                DBMS
              </li>
              <li 
                className={activeItem === 'OS' ? 'active' : ''}
                onClick={() => handleItemClick('OS')}
              >
                Operating System
              </li>
              <li 
                className={activeItem === 'Networks' ? 'active' : ''}
                onClick={() => handleItemClick('Networks')}
              >
                Computer Networks
              </li>
            </ul>
          )}
          
          <li><InsertDriveFileOutlinedIcon /> {!collapsed && "Striver's CP Sheets"}</li>
        </div> 

        <div className="border-line"></div>
        <li><BookmarkBorderOutlinedIcon /> {!collapsed && 'Saved Notes'}</li>
        <li><CableOutlinedIcon /> {!collapsed && 'CW Fullstack Final'}</li>
      </div>

      <div className="upgrade">
        <FaPlusCircle className='upgrade-icon' size={24} />
        {!collapsed && (
          <>
            <p><AutoAwesomeTwoToneIcon className='stars'/>Upgrade to <a >Plus</a> </p>
            <span>Unleash Your Full Potential with Exclusive Features</span>
            <button>Get Started Now</button>
          </>
        )}
      </div>

      {/* <div className="minimize-button" onClick={toggleSidebar}>
        <KeyboardReturnOutlinedIcon className='icon'/>
        <div className="divider"></div>
      </div> */}
      </div>
    <div  className='right'>
      <Navbar handleHamburger={handleHamburger}/>
        <Striver/>
        <HighlightNote/>
        <FAQ/>
    </div>
    </div>
  </div>
    </>
  );
};

 export default Sidebar;
// export default handleHamburger;