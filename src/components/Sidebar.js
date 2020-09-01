import React from 'react';

import logo from '../assets/logo.svg';

const Sidebar = () => {

  return (
    <div className="sidebar">
      <img src={logo} alt="" className="sidebar__logo"/>
      <div className="sidebar__section">
        <div className="sidebar__section__title">Browse</div>
        <ul className="sidebar__links">
          <li className="sidebar__link sidebar__link--active">Discover</li>
          <li className="sidebar__link">Browse All</li>
          <li className="sidebar__link">Watch Later</li>
        </ul>
      </div>
      <div className="sidebar__section">
        <div className="sidebar__section__title">Category</div>
        <ul className="sidebar__links">
          <li className="sidebar__link">Action</li>
          <li className="sidebar__link">Adventure</li>
          <li className="sidebar__link">Comedy</li>
          <li className="sidebar__link">Drama</li>
          <li className="sidebar__link">Fantasy</li>
          <li className="sidebar__link">Mystery</li>
          <li className="sidebar__link">Shonen</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;