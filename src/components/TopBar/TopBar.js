import React                                        from 'react';
import { NavLink, BrowserRouter, Route, Switch }    from 'react-router-dom';

import RootView                                     from '../../views/RootView/RootView';
import NewsView                                     from '../../views/NewsView/NewsView';
import ListView                                     from '../../views/ListView/ListView';
import TopView                                      from '../../views/TopView/TopView';
import SideBar                                      from '../SideBar/SideBar';
import Button                                       from '../Button/Button';
import Input                                        from '../Input/Input';
import RegisterForm                                 from '../RegisterForm/RegisterForm'
import LoginForm                                    from '../LoginForm/LoginForm';
import './TopBar.scss';

export default class TopBar extends React.Component {
  state = {
    isModalOpen: '',
  }

  openModal = e => {
    e.preventDefault();

    if (this.state.isModalOpen === e.target.name) {
      this.setState({ isModalOpen: '' })
    } else {
      this.setState({ isModalOpen: e.target.name })
    }
  }

  useButton = () => {
    console.log('użyto buttona')
  }

  render() {
    return (
      <div className='TopBar'>
        <BrowserRouter>
          <>
            <Button className='TopBar-button' onClick={this.openModal} name='SideBar'>KRESKI</Button>
            <NavLink className='TopBar-button' exact to="/">
              <img className='TopBar-button-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDosx28S7ZL-VwKG_4P9lxO69wTpw892vy2sRE9vyxVtPr2otnbQ" alt="logo" />
            </NavLink>
            <Input className='TopBar-input' name="search" placeholder="Szukaj" />
            <Button className='TopBar-button-search' onClick={this.useButton}>szukaj</Button>
            <Button className='TopBar-button' onClick={this.openModal} name='LoginForm'>zaloguj</Button>
            <Button className='TopBar-button' onClick={this.openModal} name='RegisterForm'>zarejestruj</Button>

            { this.state.isModalOpen === 'SideBar' && <SideBar /> }
            { this.state.isModalOpen === 'LoginForm' && <LoginForm /> }
            { this.state.isModalOpen === 'RegisterForm' && <RegisterForm /> }

            <Switch>
              <Route exact path="/" component={RootView} />
              <Route path="/news" component={NewsView} />
              <Route path="/list" component={ListView} />
              <Route path="/top" component={TopView} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    )
  }
}