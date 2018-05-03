import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidenav.css'

export default class Sidenav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='sidenav-background' style={{ height: '100vh', width: '17%', minWidth: '220px', display: 'flex', flexDirection: 'column' }} >
                <h2 style={{ fontFamily: 'monospace', fontSize: '5rem', textAlign: 'center', margin: '50px' }}>TW</h2>
                <div className={styles.fontsize} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link to="/home">Home</Link>
                    <Link to="/preaching">Predicacion</Link>
                    <Link to="/counter">Microfonos</Link>
                    <Link to="/counter">Acomodadores</Link>
                    <Link to="/counter">Capitanes Bus</Link>
                    <Link to="/">Logout</Link>
                </div>
            </div>
        )
    }
}