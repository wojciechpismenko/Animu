import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/news">nowości</NavLink>
      </li >
      <li>
        <NavLink to="/list">lista anime</NavLink>
      </li >
      <li>
        <NavLink to="/top">top anime</NavLink>
      </li >
    </ul>
  </nav>
);

export default SideBar;