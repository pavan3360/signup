import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Signup extends Component {
  static propTypes = {
    properties: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  }

  state = {};

  render() {
    const { properties, onChange, onSubmit } = this.props;

    return (
      <div className="form-container sign-up-container">
        <div className="form">
          <h2>Create Account</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={properties.name ? properties.name : ''}
            onChange={onChange}
          />
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
            onClick={() => { onSubmit('signup'); }}
          >
            Sign Up
          </button>
          <span>or use your social media for registration</span>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social"><i className="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
    );
  }
}
