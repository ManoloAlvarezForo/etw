// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Preachings.css'
import Preaching from '../components/Preaching';
import { getPreachingModel } from '../actions/preachings'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TitleActions from '../actions/title';


class Preachings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStyle: "modal",
    }
  }

  componentDidMount() {
    this.props.setTitle('Predicacion');
    this.props.loadPreachings();
  }

  showNewPreachingDialog = () => {
    this.props.getPreachingModel();
    this.setState({
      modalStyle: "modal is-active",
    })
  }

  showDetailPreachingDialog(preachingId) {
    this.props.getPreachingModel(preachingId);
    this.setState({
      modalStyle: "modal is-active",
    })
  }

  closeDialog = () => {
    this.setState({
      modalStyle: "modal"
    })
  }


  render() {
    return (
      <div style={{ height: '100vh' }}>
        <div style={{ margin: '10px', display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#dedede', borderRadius: '5px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <div style={{ height: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ width: '95%', color: '#3e3d3d', fontWeight: 'bold' }}>
                SALIDAS A LA PREDICACION
              </div>
              <div style={{ width: '42px' }}>
                <Link onClick={this.showNewPreachingDialog} style={{ transition: '0.3s', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 8px 1px' }} className="button is-primary" to="">
                  +
                 </Link>
              </div>
            </div>
            <br></br>
            <div className={styles.customlist} style={{ display: 'flex', flexDirection: 'column' }}>
              {this.props.preachings.map((preaching, index) => <a onClick={() => this.showDetailPreachingDialog(preaching.id)} style={{}} key={index}>{preaching.date}</a>)}
            </div>
            <Preaching modalStyle={this.state.modalStyle} closeDialog={this.closeDialog} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(TitleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Preachings);

