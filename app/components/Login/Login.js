// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomTextField from '../CustomTextField/CustomTextField';

const styles = {
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'
  },
  formContent: {
    alignSelf: 'center',
    padding: '50px',
    borderRadius: '7px',
    backgroundColor: 'rgb(222, 222, 222)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 3px 13px 16px 3px'
  },
  form: { 
    width: '350px'
  },
  loginContent: { 
    fontSize: '3rem',
    textAlign: 'center',
    padding: '30px',
    fontWeight: 'bold',
    color: '#424242'
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginTitle: 'Login',
      labelUserName: 'Username',
      labelPassword: 'Password',
      buttonSendText: 'Send'
    }
  }

  render() {
    return (
      <div className="animated pulse" style={styles.mainContent}>
        <div style={styles.formContent}>
          <form style={styles.form}>
            <div style={ styles.loginContent }>{ this.state.loginTitle}</div>
            <CustomTextField styles={{ width: '100%' }}
              hintText="e.g. username@mail.com"
              floatingLabelText={ this.state.labelUserName }
            /><br />
            <CustomTextField styles={{ width: '100%' }}
              hintText="Password"
              floatingLabelText={ this.state.labelPassword }
              type="password"
            /><br />
            <div style={{ marginTop: '30px' }}>
              <Link style={{ width: '350px', fontWeight: 'bold' }} className="button is-primary" to='/home'>
                {this.state.buttonSendText}
          </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
