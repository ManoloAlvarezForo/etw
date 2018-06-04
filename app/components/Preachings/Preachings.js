// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Preachings.css'
import { getPreachingModel } from '../../actions/preachings'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TitleActions from '../../actions/title';
import LargeModal from '../Modals/LargeModal';
import PreachingForm from '../Preaching/PreachingForm';

class Preachings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStyle: "modal",
      modalCard: "modal-card animated zoomIn",
      preachingSelected: {},
      title: 'SALIDAS A LA PREDICACION'
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
      <div className="animated pulse" style={{ height: '100vh' }}>
        <div style={{ margin: '10px', display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#dedede', borderRadius: '5px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <div style={{ height: '50px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ width: '95%', color: '#3e3d3d', fontWeight: 'bold' }}>
                {this.state.title}
              </div>
              <div style={{ width: '42px' }}>
                <button onClick={this.showNewPreachingDialog} style={{ transition: '0.3s', fontSize: '20px', fontWeight: 'bold', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 8px 1px' }} className="button is-primary">
                  +
                 </button>
              </div>
            </div>
            <br></br>
            <div className={styles.customlist} style={{ display: 'flex', flexDirection: 'column' }}>
              {this.props.preachings.map((preaching, index) => <a onClick={() => this.showDetailPreachingDialog(preaching.id)} style={{}} key={index}>{preaching.initDate + " - " + preaching.endDate}</a>)}
            </div>
            <LargeModal title={this.props.preaching.initDate + " - " + this.props.preaching.endDate} content={<PreachingForm preaching={this.props.preaching} />} modalStyle={this.state.modalStyle} closeDialog={this.closeDialog} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    preaching: state.preaching
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(TitleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Preachings);

