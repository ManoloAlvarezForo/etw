// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
              <p>Dias de Predicacion</p>
              <ul style={{ fontWeight: 'bold' }}>
                {
                  this.props.preaching.preachings.map((p, index) =>
                    <li key={index}>
                      <div>{p.day} - {p.date}</div>
                      <ul>
                        {
                          p.preachingEvents.map((pe, index) => <li key={index}>{pe.time} {pe.preachingLead} {pe.moment} </li>)
                        }
                      </ul>
                    </li>
                  )
                }
              </ul>
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
