import React    from 'react';
import { FontAwesomeIcon }
                from '@fortawesome/react-fontawesome';

import Input    from '../Input/Input';
import Button   from '../Button/Button';
import './RegistrationFrom.scss';

export default class RegistrationFrom extends React.Component {
  state = {
    mail: '',
    login: '',
    password: '',
    passwordRepeat: '',
    loginConfirmation: false,
    mailConfirmation: false,
    passwordConfirmation: false,
    formCorrect: false,
  }

  handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })

    if (e.target.name === 'login') { this.loginConfirmation(e.target.value) }

    if (e.target.name === 'mail') { this.mailConfirmation(e.target.value) }

    if (e.target.name === 'password') { this.passwordConfirmation(e.target.value) }
  }

  loginConfirmation = (e) => {
    const loginReg = /^(?!.*\s).{6,}$/;

    if (loginReg.test(e)) {
      this.setState({ loginConfirmation: true });
      console.log('login prawidłowy');
    } else {
      this.setState({ loginConfirmation: false });
      console.log('BŁĘDNY login, użyj co najmniej 6 znaków oprócz spacji');
    }
  }

  mailConfirmation = (e) => {
    const mailReg = /^\S+@\S+$/;

    if(mailReg.test(e)) {
      this.setState({ mailConfirmation : true });
      console.log('mail OK');
    } else {
      this.setState({ mailConfirmation: false });
      console.log('mail BŁĘDNY!');
    }
  }

  passwordConfirmation = (e) => {
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}$/;

    if (passwordReg.test(e)) {
      this.setState({ passwordConfirmation: true });
      console.log('hasło silne!');
    } else {
      this.setState({ passwordConfirmation: false });
      console.log('hasło za SŁABE, użyj co najmniej 6 znaków: wielkich i małych liter, cyfr');
    }
  }

  registrationButton = (e) => {
    e.preventDefault();

    if (this.state.password === this.state.passwordRepeat) {
      console.log('hasła sie zgadzają');
      if (this.state.mailConfirmation === true && this.state.passwordConfirmation === true && this.state.loginConfirmation === true) {
        console.log('Formularz rejestracyjny został wypełniony poprawnie');
        this.setState({ formCorrect: true });
      } else {
        console.log('popraw formularz!');
      }
    } else {
      console.log('hasła są niezgodne ze sobą');
    }
  }

  renderIcon = (name) => {
    if (this.state[name] === true) {
      return (
        <FontAwesomeIcon className='RegistrationFrom-container-input-svg' icon="check" />
      )
    } else {
      return (
        <FontAwesomeIcon className='RegistrationFrom-container-input-svg' icon="times" />
      )
    }
  }

  render() {
    return (
      <form className='RegistrationFrom'>
        <div className='RegistrationFrom-container'>
          <Input
            className='RegistrationFrom-container-input'
            name="mail"
            placeholder="Mail"
            onChange={this.handleInputChange}
            value={this.state.mail}
          />
          {this.renderIcon('mailConfirmation')}
        </div>
        <div className='RegistrationFrom-container'>
          <Input
            className='RegistrationFrom-container-input'
            name="login"
            placeholder="Login"
            onChange={this.handleInputChange}
            value={this.state.login}
          />
          {this.renderIcon('loginConfirmation')}
        </div>
        <div className='RegistrationFrom-container'>
          <Input
            className='RegistrationFrom-container-input'
            type="password"
            name="password"
            placeholder="Hasło"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          {this.renderIcon('passwordConfirmation')}
        </div>
        <div className='RegistrationFrom-container'>
          <Input
            className='RegistrationFrom-container-input'
            type="password"
            name="passwordRepeat"
            placeholder="Powtórz hasło"
            onChange={this.handleInputChange}
            value={this.state.passwordRepeat}
          />
          {this.renderIcon('passwordConfirmation')}
        </div>
        <Button className='RegistrationFrom-button' onClick={this.registrationButton}>zarejestruj</Button>
      </form>
    )
  }
};