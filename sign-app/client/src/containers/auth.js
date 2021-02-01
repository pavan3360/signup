import React, { Component } from 'react';
// react components
import axios from 'axios';
import _ from 'lodash';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import { history } from '../helpers/history';

export default class Auth extends Component {
  state = {
    signin: {},
    signup: {},
  };

  componentDidMount() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  handleOnSignupChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const signup = { ...prevState.signup };
      signup[name] = value;
      return { signup };
    });
  };

  handleOnSigninChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const signin = { ...prevState.signin };
      signin[name] = value;
      return { signin };
    });
  };

  handleOnSubmit = (event) => {
    axios({
      method: 'POST',
      url: `http://localhost:5000/api/${event === 'signin' ? 'signin' : 'signup'}`,
      data: JSON.stringify(event === 'signin' ? this.state.signin : this.state.signup),
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          signin: {},
          signup: {},
        }, () => {
          localStorage.setItem('hasLoggedIn', true);
          localStorage.setItem('user', !_.isEqual(_.get(response, 'data.data')) ? _.get(response, 'data.data[0].name') : '');
          history.push('/#/dashboard');
          window.location.reload();
        });
      }
      localStorage.setItem('hasLoggedIn', false);
      console.log('query response', response);
    })
    .then(json => console.log(json))
    .catch((error) => {
      console.log('error', error);
    });
  };

  render() {
    const { signin, signup } = this.state;

    return (
      <div className="container" id="container">
        <Signup
          properties={signup}
          onChange={(event) => { this.handleOnSignupChange(event); }}
          onSubmit={(event) => { this.handleOnSubmit(event); }}
        />
        <Signin
          properties={signin}
          onChange={(event) => { this.handleOnSigninChange(event); }}
          onSubmit={(event) => { this.handleOnSubmit(event); }}
        />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Keep connected with us and create your journey together</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>You can start a amazing journey and have fun with us</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
