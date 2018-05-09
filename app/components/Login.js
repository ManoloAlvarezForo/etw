// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
        <div style={{ alignSelf: 'center', padding: '50px', borderRadius: '7px', backgroundColor: 'rgb(222, 222, 222)' }}>
          <form style={{ width: '350px' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', padding: '30px', fontWeight: 'bold', color: '#424242' }}>Login</div>
            <div className="field">
              <label style={{ color: '#424242' }} className="label">Name</label>
              <div className="control">
                <input className="input is-rounded" type="email" placeholder="e.g manolo@gmail.com" />
              </div>
            </div>
            <div className="field">
              <label style={{ color: '#424242' }} className="label">Password</label>
              <div className="control">
                <input className="input is-rounded" type="password" placeholder="password" />
              </div>
            </div>
            <Link style={{ width: '350px', fontWeight: 'bold' }} className="is-rounded button is-primary" to='/home'>
              Send
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
