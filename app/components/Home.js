// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import Sidenav from '../components/Sidenav';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <div style={{ height: '100vh', margin: '10px', backgroundColor: '#dedede', borderRadius: '5px' }}>
          <div style={{ padding: '10px', height: '100vh', color: '#3e3d3d' }}>
            main
          </div>
        </div>
      </div>
    );
  }
}
