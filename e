[1mdiff --git a/src/App.js b/src/App.js[m
[1mindex 7475595..2cda449 100755[m
[1m--- a/src/App.js[m
[1m+++ b/src/App.js[m
[36m@@ -1,10 +1,11 @@[m
 import React from 'react';[m
 import { BrowserRouter, Route, Switch } from 'react-router-dom';[m
[31m-import Header from './components/Header/Header';[m
[32m+[m[32mimport "./App.module.scss";[m
 import RootView from './views/RootView/RootView';[m
 import ListView from './views/ListView/ListView';[m
 import TopView from './views/TopView/TopView';[m
 import Modal from './components/Modal/Modal';[m
[32m+[m[32mimport Header from './components/Header/Header';[m
 [m
 [m
 class App extends React.Component {[m
[36m@@ -22,7 +23,7 @@[m [mclass App extends React.Component {[m
 [m
   closeModal = (e) => {[m
     e.preventDefault();[m
[31m-    [m
[32m+[m
     this.setState({[m
       isModalOpen: false,[m
     })[m
[1mdiff --git a/src/components/Button/Button.js b/src/components/Button/Button.js[m
[1mindex f39a42d..6871ecb 100644[m
[1m--- a/src/components/Button/Button.js[m
[1m+++ b/src/components/Button/Button.js[m
[36m@@ -2,7 +2,7 @@[m [mimport React from 'react';[m
 import styles from './Button.module.scss';[m
 [m
 const Button = ({ children, ...props }) => ([m
[31m-  <button className={styles.button} {...props}>{children}</button>[m
[32m+[m[32m  <button className={styles.Button} {...props}>{children}</button>[m
 );[m
 [m
[31m-export default Button;[m
\ No newline at end of file[m
[32m+[m[32mexport default Button;[m
[1mdiff --git a/src/components/Button/Button.module.scss b/src/components/Button/Button.module.scss[m
[1mindex e69de29..8c2493f 100644[m
[1m--- a/src/components/Button/Button.module.scss[m
[1m+++ b/src/components/Button/Button.module.scss[m
[36m@@ -0,0 +1,40 @@[m
[32m+[m[32m.Button {[m
[32m+[m[32m  display: block;[m
[32m+[m[32m  width: 120px;[m
[32m+[m[32m  height: 40px;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  text-decoration: none;[m
[32m+[m[32m  padding: 7px 12px;[m
[32m+[m[32m  font-weight: 500;[m
[32m+[m[32m  font-family: "Montserrat";[m
[32m+[m[32m  background: #4b4b4b;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  cursor: pointer;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mButton:hover {[m
[32m+[m[32m    text-decoration: none;[m
[32m+[m[32m    font-weight: 700;[m
[32m+[m[32m    color: #4b4b4b;[m
[32m+[m[32m    background: white;[m
[32m+[m[32m    border: 2px solid #4b4b4b;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32m.NavItem {[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m  margin-right: 50px;[m
[32m+[m[32m  list-style: none;[m
[32m+[m
[32m+[m[32m  &_link {[m
[32m+[m[32m    text-decoration: none;[m
[32m+[m[32m    color: #4b4b4b;[m
[32m+[m[32m    font-weight: 500;[m
[32m+[m
[32m+[m[32m    &_active {[m
[32m+[m[32m      font-weight: 700;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/src/components/Header/Header.js b/src/components/Header/Header.js[m
[1mindex 3f84de4..6e98699 100644[m
[1m--- a/src/components/Header/Header.js[m
[1m+++ b/src/components/Header/Header.js[m
[36m@@ -1,10 +1,11 @@[m
 import React from 'react';[m
 import HeaderNavigation from './HeaderNavigation';[m
[32m+[m[32mimport styles from './Header.module.scss';[m
 import Button from '../Button/Button';[m
 import Input from '../Input/Input';[m
 [m
 const Header = ({ useButtonFn, openModelFn }) => ([m
[31m-  <header>[m
[32m+[m[32m  <header className={styles.Wrapper}>[m
     <HeaderNavigation />[m
     <Input name="search" placeholder="Szukaj" />[m
     <Button onClick={useButtonFn} children='szukaj' />[m
[1mdiff --git a/src/components/Header/Header.module.scss b/src/components/Header/Header.module.scss[m
[1mindex e69de29..209b6d3 100644[m
[1m--- a/src/components/Header/Header.module.scss[m
[1m+++ b/src/components/Header/Header.module.scss[m
[36m@@ -0,0 +1,22 @@[m
[32m+[m[32m.Wrapper {[m
[32m+[m[32m  display: grid;[m
[32m+[m[32m  grid-template-columns: 1fr 1fr;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  padding: 30px 50px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// .Item {[m
[32m+[m[32m//   display: block;[m
[32m+[m[32m//   margin-right: 10px;[m
[32m+[m[32m//   list-style: none;[m
[32m+[m
[32m+[m[32m//   &_link {[m
[32m+[m[32m//     text-decoration: none;[m
[32m+[m[32m//     color: #4b4b4b;[m
[32m+[m[32m//     font-weight: 500;[m
[32m+[m
[32m+[m[32m//     &_active {[m
[32m+[m[32m//       font-weight: 700;[m
[32m+[m[32m//     }[m
[32m+[m[32m//   }[m
[32m+[m[32m// }[m
\ No newline at end of file[m
[1mdiff --git a/src/components/Header/HeaderNavigation.js b/src/components/Header/HeaderNavigation.js[m
[1mindex f7b211c..0355b79 100644[m
[1m--- a/src/components/Header/HeaderNavigation.js[m
[1m+++ b/src/components/Header/HeaderNavigation.js[m
[36m@@ -1,21 +1,21 @@[m
 import React from 'react';[m
 import { NavLink } from 'react-router-dom';[m
[31m-import styles from './HeaderNavigation.module.scss'[m
[32m+[m[32mimport styles from './HeaderNavigation.module.scss';[m
 [m
 const HeaderNavigation = () => ([m
   <nav>[m
[31m-    <ul>[m
[31m-      <li>[m
[31m-        <NavLink exact to="/">[m
[31m-          <img className={styles.logo} src="https://pm1.narvii.com/6218/68b71aeda313905e7714e8b42fd41cbfdcfb4905_hq.jpg" alt="logo" />[m
[32m+[m[32m    <ul className={styles.Wrapper}>[m
[32m+[m[32m      <li className={styles.NavItem}>[m
[32m+[m[32m        <NavLink exact activeClassName={styles.NavItem_link_active} className={styles.NavItem_link} to="/">[m
[32m+[m[32m          <img className={styles.Logo} src="https://pm1.narvii.com/6218/68b71aeda313905e7714e8b42fd41cbfdcfb4905_hq.jpg" alt="logo" />[m
         </NavLink>[m
       </li>[m
[31m-      <li>[m
[31m-        <NavLink to="/list">lista anime</NavLink>[m
[31m-      </li>[m
[31m-      <li>[m
[31m-        <NavLink to="/top">top anime</NavLink>[m
[31m-      </li>[m
[32m+[m[32m      <li className={styles.NavItem}>[m
[32m+[m[32m        <NavLink activeClassName={styles.NavItem_link_active} className={styles.NavItem_link} to="/list">lista anime</NavLink>[m
[32m+[m[32m      </li >[m
[32m+[m[32m      <li className={styles.NavItem}>[m
[32m+[m[32m        <NavLink activeClassName={styles.NavItem_link_active} className={styles.NavItem_link} to="/top">top anime</NavLink>[m
[32m+[m[32m      </li >[m
     </ul>[m
   </nav>[m
 );[m
[1mdiff --git a/src/components/Header/HeaderNavigation.module.scss b/src/components/Header/HeaderNavigation.module.scss[m
[1mindex 517dbfb..faef8c2 100644[m
[1m--- a/src/components/Header/HeaderNavigation.module.scss[m
[1m+++ b/src/components/Header/HeaderNavigation.module.scss[m
[36m@@ -1,4 +1,25 @@[m
[31m-.logo {[m
[31m-  width: 50px;[m
[31m-  height: 50px;[m
[32m+[m[32m.Logo {[m
[32m+[m[32m  width: 40px;[m
[32m+[m[32m  height: 40px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.Wrapper {[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.NavItem {[m
[32m+[m[32m  display: inline-block;[m
[32m+[m[32m  margin-right: 50px;[m
[32m+[m[32m  list-style: none;[m
[32m+[m
[32m+[m[32m  &_link {[m
[32m+[m[32m    text-decoration: none;[m
[32m+[m[32m    color: #4b4b4b;[m
[32m+[m[32m    font-weight: 500;[m
[32m+[m
[32m+[m[32m    &_active {[m
[32m+[m[32m      font-weight: 700;[m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/components/Input/Input.js b/src/components/Input/Input.js[m
[1mindex fc3a0b4..b228f10 100644[m
[1m--- a/src/components/Input/Input.js[m
[1m+++ b/src/components/Input/Input.js[m
[36m@@ -1,9 +1,11 @@[m
 import React from 'react';[m
 import PropTypes from 'prop-types';[m
[32m+[m[32mimport styles from './Input.module.scss';[m
 [m
 const Input = ({tag: Tag, type, name, label, maxLength, placeholder, ...props}) => ([m
   <>[m
     <Tag[m
[32m+[m[32m      className={styles.Input}[m
       type={type}[m
       name={name}[m
       id={name}[m
[36m@@ -12,7 +14,7 @@[m [mconst Input = ({tag: Tag, type, name, label, maxLength, placeholder, ...props})[m
       placeholder={placeholder}[m
       {...props}[m
     />[m
[31m-    <label htmlFor={name}>[m
[32m+[m[32m    <label className={styles.Label} htmlFor={name}>[m
       {label}[m
     </label>[m
   </>[m
[36m@@ -32,7 +34,7 @@[m [mInput.defaultProps = {[m
   tag: 'input',[m
   name: '',[m
   label: '',[m
[31m-  maxLength: 100,[m
[32m+[m[32m  maxLength: 200,[m
   placeholder: '',[m
 }[m
 [m
[1mdiff --git a/src/components/Input/Input.module.scss b/src/components/Input/Input.module.scss[m
[1mindex e69de29..31836f0 100644[m
[1m--- a/src/components/Input/Input.module.scss[m
[1m+++ b/src/components/Input/Input.module.scss[m
[36m@@ -0,0 +1,24 @@[m
[32m+[m[32m.Input {[m
[32m+[m[32m  color: #4b4b4b;[m
[32m+[m[32m  font-weight: 500;[m
[32m+[m[32m  font-family: "Montserrat";[m
[32m+[m[32m  border: 2px solid #4b4b4b;[m
[32m+[m[32m  width: 200px;[m
[32m+[m[32m  background-color: white;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  height: 40px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.Label {[m
[32m+[m[32m  display: none;[m
[32m+[m[32m  color: white;[m
[32m+[m[32m  font-family: "Montserrat";[m
[32m+[m[32m  font-weight: 500;[m
[32m+[m[32m  border: none;[m
[32m+[m[32m  line-height: 10px;[m
[32m+[m[32m  width: 200px;[m
[32m+[m[32m  background-color: none;[m
[32m+[m[32m  padding: 10px;[m
[32m+[m[32m  transition: 0.2s ease-out all;[m
[32m+[m[32m}[m
[32m+[m
