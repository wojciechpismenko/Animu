import React        from 'react';
import { NavLink }  from 'react-router-dom';

import './SideBar.scss';

const SideBar = ({ openModalFn }) => (
  <nav className='SideBar'>
    <ul className='SideBar-list'>
      <li onClick={openModalFn} name=''>
        <NavLink className='SideBar-list-item' to="/news">nowości</NavLink>
      </li>
      <li onClick={openModalFn} name=''>
        <NavLink className='SideBar-list-item' to="/list">lista anime</NavLink>
      </li>
      <li onClick={openModalFn} name=''>
        <NavLink className='SideBar-list-item' to="/top">top anime</NavLink>
      </li>
    </ul>
  </nav>
);

export default SideBar;