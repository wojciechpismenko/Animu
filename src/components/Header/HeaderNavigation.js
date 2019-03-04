import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">logo</NavLink>
      </li>
      <li>
        <NavLink to="/list">lista anime</NavLink>
      </li>
      <li>
        <NavLink to="/top">top anime</NavLink>
      </li>
    </ul>
  </nav>
);

export default HeaderNavigation;