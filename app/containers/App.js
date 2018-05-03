// @flow
import * as React from 'react';
import Login from './LoginPage'
import Sidenav from '../components/Sidenav';
import Toolbar from '../components/Toolbar';

type Props = {
  children: React.Node
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div style={{display: 'flex', flexDirection: 'row'}}>
        <Sidenav />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
         <Toolbar />
         {this.props.children}
        </div>
      </div>
    );
  }
}
