import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as TitleActions from '../../actions/title'
import { bindActionCreators } from 'redux';

const styles = {
    content: {
        width: '100%',
        height: '54px'
    },
    title: {
        fontSize: '1.8rem',
        margin: '10px',
        fontWeight: 'bold',
        color: 'white'
    }
}

class Toolbar extends Component {
    render() {
        return (
            <div style={ styles.content }>
                <h2 style={ styles.title }>{this.props.title}</h2>
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