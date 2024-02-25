import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarData } from './SideBarData';

const SideBar = () => {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SideBarData.map((val, key) => (
          <NavLink key={key} to={val.link} activeClassName='active' className='link'>
            <li className='row'>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
