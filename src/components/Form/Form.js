import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Form extends React.Component {
  state = {
    mail: '',
    login: '',
    password: '',
    passwordRepeat: '',
    loginValidation: false,
    mailValidation: false,
    passwordValidation: false,
    formCorrect: false,
  }

  handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      })

    if (e.target.name === 'login') { this.loginValidation(e.target.value) }

    if (e.target.name === 'mail') { this.mailValidation(e.target.value) }

    if (e.target.name === 'password') { this.passwordValidation(e.target.value) }
  }

  loginValidation = (e) => {
    const loginReg = /^(?!.*\s).{6,}$/;

    if (loginReg.test(e)) {
      this.setState({ loginValidation: true });
      console.log('login prawidłowy');
    } else {
      this.setState({ loginValidation: false });
      console.log('BŁĘDNY login, użyj co najmniej 6 znaków oprócz spacji');
    }
  }

  mailValidation = (e) => {
    const mailReg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    if(mailReg.test(e)) {
      this.setState({ mailValidation : true });
      console.log('mail OK');
    } else {
      this.setState({ mailValidation: false });
      console.log('mail BŁĘDNY!');
    }
  }

  passwordValidation = (e) => {
    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,}$/;
    // const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)\_\+\-\=])(?=.*[A-Z])(?!.*\s).{8,}$/;

    if (passwordReg.test(e)) {
      this.setState({ passwordValidation: true });
      console.log('hasło silne!');
    } else {
      this.setState({ passwordValidation: false });
      console.log('hasło za SŁABE, użyj co najmniej 6 znaków: wielkich i małych liter, cyfr');
    }
  }

  registerButton = (e) => {
    e.preventDefault();

    if (this.state.password === this.state.passwordRepeat) {
      console.log('hasła sie zgadzają');
      if (this.state.mailValidation === true && this.state.passwordValidation === true && this.state.loginValidation === true) {
        console.log('Formularz rejestracyjny został wypełniony poprawnie');
        this.setState({ formCorrect: true });
      } else {
        console.log('popraw formularz!');
      }
    } else {
      console.log('hasła są niezgodne ze sobą');
    }
  }

  render() {
    return (
      <div>
        <form>
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
          <Input
            type="password"
            name="passwordRepeat"
            placeholder="Powtórz hasło"
            onChange={this.handleInputChange}
            value={this.state.passwordRepeat}
          />
          <Button children='zarejestruj' onClick={this.registerButton
              //, this.state.formCorrect && console.log('jak przekazac do App.js żeby przycisk wykonał również closeModalFn ???')
            } />
          </form>
      </div>
    )
  }
};

export default Form;