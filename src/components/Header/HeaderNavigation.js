import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss'

const HeaderNavigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          <img className={styles.logo} src="https://pm1.narvii.com/6218/68b71aeda313905e7714e8b42fd41cbfdcfb4905_hq.jpg" alt="logo" />
        </NavLink>
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