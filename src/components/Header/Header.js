import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import Button from '../Button/Button';
import Input from '../Input/Input';

const Header = ({ useButtonFn }) => (
  <header>
    <HeaderNavigation />
    <Input placeholder="Szukaj" />
    <Button onClick={useButtonFn}>szukaj</Button>
    <Input placeholder="Login" />
    <Input placeholder="Hasło" type="password" />
    <Button onClick={useButtonFn}>zaloguj</Button>
    <Button onClick={useButtonFn}>zarejestuj</Button>
  </header>
);

export default Header;