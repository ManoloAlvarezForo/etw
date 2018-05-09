// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PreachingForm from '../components/PreachingForm';

class Preaching extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className={this.props.modalStyle}>
        <div onClick={this.props.closeDialog} className="modal-background"></div>
        <div style={{ maxHeight: '100vh', height: '98%', width: '99%' }} className="modal-card">
          <header style={{ height: '55px' }} className="modal-card-head">
            <p style={{ fontWeight: 'bold' }} className="modal-card-title">{this.props.preaching.date}</p>
            <button className="delete" onClick={this.props.closeDialog} aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <div style={{ color: "black" }} className="content">
              <PreachingForm preaching={this.props.preaching} />
            </div>
          </section>
          <footer style={{ height: '55px' }} className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button onClick={this.props.closeDialog} className="button">Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    preaching: state.preaching
  };
}

export default connect(mapStateToProps)(Preaching);
