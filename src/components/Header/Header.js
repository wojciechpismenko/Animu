import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Header = ({ useButtonFn }) => (
  <header>
    <HeaderNavigation />
    <Input name="search" placeholder="Szukaj" />
    <Button onClick={useButtonFn} children='szukaj' />
    <Input name="login" placeholder="Login lub mail" />
    <Input type="password" name="password" placeholder="Hasło" />
    <Button onClick={useButtonFn} children='zaloguj' />
    <Button onClick={useButtonFn} children='zarejestuj' />
  </header>
);

export default Header;