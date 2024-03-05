import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useHistory hook
import { SideBarData } from './SideBarData';
import { people02 } from '../assets';

const SideBar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Dummy user data (replace with actual user data)
  const user = {
    username: "Utkarsh",
    //profileImage: "path_to_user_image.jpg" // URL of the user's profile image
  };

  const handleLogout = () => {
    // Perform logout actions (e.g., clear user session, etc.)
    // Navigate to the home page
    navigate("/adminloginpage");
  };

  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {/* User info */}
        <li className='user-info'>
          <div className='user-image'><img src={people02} alt='User' /></div>
          <div className='welcome-message'>Welcome back, {user.username}!</div>
        </li>
        {/* Sidebar links */}
        {SideBarData.map((val, key) => (
          <NavLink key={key} to={val.link} activeClassName='active' className='link'>
            <li className='row'>
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          </NavLink>
        ))}
        {/* Logout button */}
        <li className='logout-button'>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
