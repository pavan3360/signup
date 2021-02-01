import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Signin extends Component {
  static propTypes = {
    properties: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }

  state = {};

  render() {
    const { properties, onChange, onSubmit } = this.props;

    return (
      <div className="form-container sign-in-container">
        <div className="form">
          <h2>Sign In to Journey</h2>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social"><i className="fab fa-pinterest-p"></i></a>
          </div>
          <span>or use your email for sign in</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={properties.email ? properties.email : ''}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={properties.password ? properties.password : ''}
            onChange={onChange}
          />
          <button
            onClick={() => { onSubmit('signin'); }}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}
