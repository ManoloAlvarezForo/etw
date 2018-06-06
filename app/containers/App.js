// @flow
import React, { Component } from 'react';
import Login from './LoginPage'
import Sidenav from '../components/Sidenav/Sidenav';
import Toolbar from '../components/Toolbar/Toolbar';

type Props = {
  children: React.Node
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}

const App = ({children}) => {
  return (
    <div style={styles.container}>
      <Sidenav />
      <div style={styles.content}>
        <Toolbar />
        {children}
      </div>
    </div>
  );
}

export default App;