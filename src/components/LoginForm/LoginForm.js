import React    from 'react';
import Input    from '../Input/Input';
import Button   from '../Button/Button';

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
      <div>
        <form>
          <Input
            name="login"
            placeholder="Login lub mail"
            onChange={this.handleInputChange}
            value={this.state.login}
          />
          <Input
            type="password"
            name="password"
            placeholder="Hasło"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <Button>zaloguj</Button>
        </form>
      </div>
    )
  }
};