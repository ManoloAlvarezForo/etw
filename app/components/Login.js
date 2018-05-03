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
        <form style={{ alignSelf: 'center', width: '350px' }}>
          <div style={{ fontSize: '3rem', textAlign: 'center', padding: '30px', fontWeight: 'bold' }}>Login</div>
          <div className="field">
            <label style={{color: 'white'}} className="label">Name</label>
            <div className="control">
              <input className="input is-rounded" type="email" placeholder="e.g manolo@gmail.com" />
            </div>
          </div>

          <div className="field">
            <label  style={{color: 'white'}} className="label">Password</label>
            <div className="control">
              <input className="input is-rounded" type="password" placeholder="password" />
            </div>
          </div>
          <Link style={{width: '350px'}} className="is-rounded button is-primary is-inverted is-outlined" to='/home'>
            Send
          </Link>
        </form>
      </div>
    );
  }
}
