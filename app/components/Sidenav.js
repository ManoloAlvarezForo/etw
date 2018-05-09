import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidenav.css'

const options = [
    { id: 1, name: 'Inicio', path: '/home', isSelected: true },
    { id: 2, name: 'Predicacion', path: '/preachings', isSelected: false },
    { id: 3, name: 'Microfonos', path: '/counter', isSelected: false },
    { id: 4, name: 'Acomodadores', path: '/counter', isSelected: false },
    { id: 5, name: 'Capitanes Bus', path: '/counter', isSelected: false },
    { id: 6, name: 'Logout', path: '/', isSelected: false }
]

export default class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: options,
            isSelected: 'is-a-selected'
        }
    }

    selectOption(optionSelected) {
        this.setState({
            options: this.state.options.map(option => {
                (optionSelected === option) ? option.isSelected = true : option.isSelected = false;
                return option;
            })
        })
    }

    render() {
        return (
            <div className='sidenav-background' style={{ height: '100vh', width: '17%', minWidth: '220px', display: 'flex', flexDirection: 'column' }} >
                <h2 style={{ fontFamily: 'monospace', fontSize: '5rem', textAlign: 'center', margin: '50px' }}>TW</h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {
                        this.state.options.map((option, index) => <Link onClick={() => this.selectOption(option)} className={`${option.isSelected ? styles.is_selected : styles.a_custom}`} key={index} to={option.path}>{option.name}</Link>)
                    }
                </div>
            </div>
        )
    }
}