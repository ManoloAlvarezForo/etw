import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as TitleActions from '../actions/title'
import { bindActionCreators } from 'redux';

class Toolbar extends Component {
    render() {
        return (
            <div style={{ width: '100%', height: '54px' }}>
                <h2 style={{fontSize: '1.8rem', margin: '10px', fontWeight: 'bold' }}>{ this.props.title}</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.title
    }
}

export default connect(mapStateToProps)(Toolbar);