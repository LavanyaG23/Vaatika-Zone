import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';

const SideBar = () => {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SideBarData.map((val, key) => {
          return (
            <li key={key} className={window.location.pathname === val.link ? 'Active' : ''}>
              <Link to={val.link} className='row'>
                <div id='icon'>
                  {val.icon}
                </div>
                <div id='title'>
                  {val.title}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBar;
