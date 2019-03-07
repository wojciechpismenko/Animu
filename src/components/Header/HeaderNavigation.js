import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => (
  <nav className={styles.Nav}>
    <ul className={styles.Wrapper}>
      <li className={styles.NavItem}>
        <NavLink exact activeClassName={styles.NavItem_link_active} className={styles.NavItem_link} to="/">
          <img className={styles.NavItem_logo} src="https://pm1.narvii.com/6218/68b71aeda313905e7714e8b42fd41cbfdcfb4905_hq.jpg" alt="logo" />
        </NavLink>
      </li>
      <li className={styles.NavItem}>
        <NavLink activeClassName={styles.NavItem_link_active} className={styles.NavItem_link} to="/list">lista anime</NavLink>
      </li >
      <li className={styles.NavItem}>
        <NavLink activeClassName={styles.NavItem_link_active} className={styles.NavItem_link} to="/top">top anime</NavLink>
      </li >
    </ul>
  </nav>
);

export default HeaderNavigation;