// @flow
import React, { Component } from 'react';

const styles = {
  card: {
    maxHeight: '100vh',
    height: '98%',
    width: '99%'
  }, 
  head: {
    height: '55px'
  },
  title: {
    fontWeight: 'bold'
  },
  sectionContent: {
    backgroundColor: 'rgb(222, 222, 222)',
    padding: '10px' 
  },
  footer: {
    height: '55px',
    justifyContent: 'flex-end' 
  }
}

const LargeModal = ({ modalStyle, closeDialog, content, title }) => {
  return (
    <div id="customModal" className={modalStyle}>
      <div className="modal-background"></div>
      <div id="customModal" style={ styles.card } className="modal-card animated slideInUp">
        <header style={ styles.head } className="modal-card-head">
          <p style={ styles.title } className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeDialog} aria-label="close"></button>
        </header>
        <section style={ styles.sectionContent } className="modal-card-body">
          <div style={{ color: "black" }} className="content">
            {content}
          </div>
        </section>
        <footer style={ styles.footer} className="modal-card-foot">
          <button className="button is-primary">Guardar</button>
          <button onClick={closeDialog} className="button">Cancelar</button>
        </footer>
      </div>
    </div>
  )
}

export default LargeModal;
