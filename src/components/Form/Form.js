import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends React.Component {
  state = {
    mail: '',
    login: '',
    password: '',
  }

  handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })
  }

  useButton = () => {
    const mail = this.state.mail;
    const mailReg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    mailReg.test(mail) ? (
      console.log('Mail OK')
    ) : (
      console.log('Mail jest niepoprawny')
    )
  }

  render(submitFn) {
    return (
      <div>
        <form onSubmit={submitFn}>
          <Input
            name="mail"
            placeholder="Mail"
            onChange={this.handleInputChange}
            value={this.state.mail}
          />
          <Input
            name="login"
            placeholder="Login"
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
        </form>
        <Button onClick={this.useButton} children='zarejestuj' />
      </div>
    )
  }
};

export default Form;