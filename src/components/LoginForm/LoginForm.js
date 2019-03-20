import React    from 'react';

import Input    from '../Input/Input';
import Button   from '../Button/Button';
import './LoginForm.scss';

export default class LoginForm extends React.Component {
  state = {
    login: '',
    password: '',
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form className='LoginForm'>
        <Input
          className='LoginForm-input'
          name="login"
          placeholder="Login lub mail"
          onChange={this.handleInputChange}
          value={this.state.login}
        />
        <Input
          className='LoginForm-input'
          type="password"
          name="password"
          placeholder="Hasło"
          onChange={this.handleInputChange}
          value={this.state.password}
        />
        <Button className='LoginForm-button'>zaloguj</Button>
      </form>
    )
  }
};