import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RootView from '../../views/RootView/RootView';
import NewsView from '../../views/NewsView/NewsView';
import ListView from '../../views/ListView/ListView';
import TopView from '../../views/TopView/TopView';
import SideBar from '../SideBar/SideBar';
import Button from '../Button/Button';
import Input from '../Input/Input';
import RegisterForm from '../RegisterForm/RegisterForm'
import LoginForm from '../LoginForm/LoginForm';

class TopBar extends React.Component {
  state = {
    SideBar: false,
    RegisterForm: false,
    LoginForm: false,
  }

  openModal = e => {
    e.preventDefault();

    if (this.state[e.target.name] === false) {
      this.setState({ [e.target.name]: true })
    } else {
      this.setState({ [e.target.name]: false })
    }

    if (e.target.name === 'LoginForm') { this.setState({ RegisterForm: false }) }

    if (e.target.name === 'RegisterForm') { this.setState({ LoginForm: false }) }
  }

  useButton = () => {
    console.log('użyto buttona')
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <>
            <Button onClick={this.openModal} name='SideBar'>KRESKI</Button>
            <NavLink exact to="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDosx28S7ZL-VwKG_4P9lxO69wTpw892vy2sRE9vyxVtPr2otnbQ" alt="logo" />
            </NavLink>
            <Input name="search" placeholder="Szukaj" />
            <Button onClick={this.useButton}>szukaj</Button>
            <Button onClick={this.openModal} name='LoginForm'>zaloguj</Button>
            <Button onClick={this.openModal} name='RegisterForm'>zarejestruj</Button>

            {this.state.SideBar && <SideBar />}
            {this.state.LoginForm && <LoginForm />}
            {this.state.RegisterForm && <RegisterForm />}


            <Switch>
              <Route exact path="/" component={RootView} />
              <Route path="/news" component={NewsView} />
              <Route path="/list" component={ListView} />
              <Route path="/top" component={TopView} />
            </Switch>
          </>
        </BrowserRouter>
      </>
    )
  }
}

export default TopBar;